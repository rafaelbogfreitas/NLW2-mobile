import React from 'react';

import { Container, TeachersList } from "./styles";
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList = () => {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis" />
      <TeachersList contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 24
      }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeachersList>
    </Container>
  )
}

export default TeacherList;
