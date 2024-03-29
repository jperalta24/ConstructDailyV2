import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {HomePage, LoginForm, RegisterForm} from "./pages";
import UserProfile from "./components/Users/UserProfile"
import ProjectPage from "./pages/projectPage";
import ProjectList from "./components/Projects/ProjectList";
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="logIn" element={<LoginForm/>} />
        <Route path="signup" element={<RegisterForm/>} />
        <Route path="profile" element={<UserProfile/>} />
        <Route path="/" element={<ProjectList />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};


export default App;
