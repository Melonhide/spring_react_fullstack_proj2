import React, { Component } from 'react';
import Container from './Container';
import Footer from './Footer';
import './App.css';
import { getAllStudents } from './client'
import AddStudentForm from './forms/AddStudentForm'
import {
  Table,
  Avatar,
  Spin,
  Modal
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const getIndicatorIcon = () => <LoadingOutlined type = "loading" style = {{fontSize:24}} />


class App extends Component {

  state = {
    students:[],
    isFetching: false,
    isAddStudentModalVisiable: false
  }

  componentDidMount () {
    this.fetchStudents();
  }

  openAddStudentModal = () => this.setState({isAddStudentModalVisiable: true})
  
  closeAddStudentModal = () => this.setState({isAddStudentModalVisiable: false})

  fetchStudents = ()=>{
    this.setState({
      isFetching: true
    });
    getAllStudents()
    .then(res => res.json()
    .then(students => {
      console.log(students);
      this.setState({
        students,
        isFetching: false
      })
    }));
  }

  render(){  
    const{ students, isFetching, isAddStudentModalVisiable } = this.state;

    if (isFetching) {
      return(
        <Container>
          <Spin indicator={getIndicatorIcon()} />
        </Container>
      )
    }

    if (students && students.length){
      const columns = [
        {
          title: '',
          key: 'avatar',
          render: (text, student) => (
            <Avatar size='large'>
              {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
            </Avatar>
          )
        },
        {
          title: 'StudentId',
          dataIndex: 'studentId',
          key: 'studentId'
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName'
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName'
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender'
        }
      ];

      return (
      <Container>
        <Table 
          dataSource={students} 
          columns={columns} 
          pagination={false}
          rowKey='studentId'/>
          <Modal
            title="Add new student"
            visible={isAddStudentModalVisiable}
            onOk={this.closeAddStudentModal}
            oncancel={this.closeAddStudentModal}
            width={1000}>
              <h1>Hello Modal with Antd</h1>
              <AddStudentForm />
          </Modal>
          <Footer 
            numberOfStudents={students.length}
            handleAddStudentClickEvent={this.openAddStudentModal}/>
      </Container>
      );
    }

    return <h1>No Student Found</h1>
  }
}

export default App;
