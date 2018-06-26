import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styles from './css'

let uriPrefixProjects = 'https://raw.githubusercontent.com/opera443399/opsPM/master/samples/';
let uriJsonProjects = uriPrefixProjects + 'projects.json';

type Props = {};
class ProjectListScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Project List',
  };

  constructor(props) {
    console.log('@constructor');
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    console.log('@componentDidMount');
    this.apiGetData();
  }

  componentWillUnmount() {
    console.log('@componentWillUnmount');
  }

  async apiGetData() {
    console.log('@apiGetData');
    try {
      let response = await fetch(uriJsonProjects);
      let responseJson = await response.json();
      console.log('responseJson = ' + JSON.stringify(responseJson));
      this.setState({
        isLoading: false,
        subtitle: responseJson.description,
        dataSource: responseJson.data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log('@render');
    if (this.state.isLoading) {
      console.log('isLoading => true');
      return (
        <View style={styles.isLoading}>
          <StatusBar barStyle="light-content" />
          <ActivityIndicator />
        </View>
      )
    }

    console.log('isLoading => false');
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.msg}>
          <Text style={styles.subtitle}>{this.state.subtitle}</Text>
        </View>
        <View style={styles.content}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={() => {
                this.props.navigation.navigate('ProjectDetails', {
                  projectIcon: item.projectIcon,
                  projectID: item.projectID,
                  projectName: item.projectName,
                  opLog: item.opLog
                });
              }}>
                <View style={styles.row}>
                  <View style={styles.columnA}>
                    <Text style={styles.projectIcon}>{item.projectIcon}</Text>
                  </View>
                  <View style={styles.columnB}>
                    <Text style={styles.projectName}>{item.projectName}</Text>
                    <Text style={styles.opLog}>{item.opLog}</Text>
                  </View>
                  <View style={styles.columnC}>
                    <Text style={styles.projectStatus}>{item.projectStatus}</Text>
                    <Text style={styles.projectFlag}>{item.projectFlag}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

class ProjectDetailsScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Project Details',
  };

  constructor(props) {
    console.log('@constructor');
    super(props);
    const { navigation } = this.props;
    const projectIcon = navigation.getParam('projectIcon', '\uD83C\uDFB6');
    const projectID = navigation.getParam('projectID', 'NO-ID-EXIST');
    const projectName = navigation.getParam('projectName', 'demo');
    const opLog = navigation.getParam('opLog', '\uD83D\uDCC4');
    this.state = {
      isLoading: true,
      projectIcon: projectIcon,
      projectID: projectID,
      projectName: projectName,
      opLog: opLog
    }
  }

  componentDidMount() {
    console.log('@componentDidMount');
    this.apiGetData();
  }

  componentWillUnmount() {
    console.log('@componentWillUnmount');
  }

  async apiGetData() {
    console.log('@apiGetData');
    try {
      let response = await fetch(uriPrefixProjects + this.state.projectID + '.json');
      let responseJson = await response.json();
      console.log('responseJson = ' + JSON.stringify(responseJson));
      this.setState({
        isLoading: false,
        dataSource: responseJson.data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log('@render');
    if (this.state.isLoading) {
      console.log('isLoading => true');
      return (
        <View style={styles.isLoading}>
          <StatusBar barStyle="light-content" />
          <ActivityIndicator />
        </View>
      )
    }

    console.log('isLoading => false');
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.msg}>
          <Text style={styles.subtitle}>{this.state.projectName}</Text>
        </View>
        <View style={styles.content}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <View style={styles.columnA}>
                  <Text style={styles.projectIcon}>{this.state.projectIcon}</Text>
                </View>
                <View style={styles.columnB}>
                  <Text style={styles.projectName}>{item.ServiceName}</Text>
                  <Text style={styles.opLog}>{this.state.opLog}</Text>
                </View>
                <View style={styles.columnC}>
                  <Text style={styles.projectStatus}>{item.ServiceStatus}</Text>
                  <Text style={styles.projectFlag}>{item.ServiceFlag}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    ProjectList: {
      screen: ProjectListScreen,
    },
    ProjectDetails: {
      screen: ProjectDetailsScreen,
    },
  },
  {
    initialRouteName: 'ProjectList',

    navigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
