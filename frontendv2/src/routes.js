import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Teacher from "./views/Teacher/index";
import TeacherCreate from "./views/Teacher/create";
import TeacherList from './views/Teacher/ListTeacher';
import CourseList from './views/Course/ListCourse';
import CourseAreaList from './views/CourseArea/index';
import CourseAreaCreate from './views/CourseArea/create';
import CourseAreaEdit from './views/CourseArea/edit';
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/coursearea" />
  },
  {
    path: "/teacher",
    layout: DefaultLayout,
    component: Teacher
  },
  {
    path: "/teacher-create",
    layout: DefaultLayout,
    component: TeacherCreate
  },
  {
    path: "/teacher-list",
    layout: DefaultLayout,
    component: TeacherList
  },
  {
    path: "/course-list",
    layout: DefaultLayout,
    component: CourseList
  },
  {
    path: "/coursearea",
    layout: DefaultLayout,
    component: CourseAreaList
  },
  {
    path: "/coursearea-create",
    layout: DefaultLayout,
    component: CourseAreaCreate
  },
  {
    path: "/coursearea-edit",
    layout: DefaultLayout,
    component: CourseAreaEdit
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];