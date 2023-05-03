import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className='gap-5 mt-5 mb-5'>
                <div>
                    <div>
                        <h3>
                            Question Number:1
                        </h3>
                        <p>
                            Tell us the differences between uncontrolled and controlled components.
                        </p>
                    </div>
                    <div>
                        <h3>
                            Answer:
                        </h3>
                        <p>
                            Here are the key differences between the two:
                            <br />
                            Controlled components: In a controlled component, the parent component manages the state of the child component. The parent passes data down to the child component as props, and the child component notifies the parent of any changes via callback functions. This approach gives the parent component full control over the behavior of the child component, including when it updates and what data it displays.
                            <br />
                            Uncontrolled components: In an uncontrolled component, the component manages its own state internally. The parent component does not pass data down to the child component as props; instead, the child component retrieves its own data from the DOM. This approach is useful when the data that the component needs is not known in advance or when it needs to be able to modify its own state without notifying the parent component.
                            <br />
                            Overall, controlled components offer more predictability and control over component behavior, while uncontrolled components offer more flexibility and autonomy to the child component. The choice between the two depends on the specific needs of the application and the developer's preferences.
                        </p>
                    </div>

                </div>

                <div>
                    <div>
                        <h3>
                            Question Number:2
                        </h3>
                        <p>
                            How to validate React props using PropTypes
                        </p>
                    </div>
                    <div>
                        <h3>
                            Answer:
                        </h3>
                        <p>
                            PropTypes.any : The prop can be of any data type.
                            <br />
                            PropTypes.bool : The prop should be a Boolean.
                            <br />
                            PropTypes.number : The prop should be a number.
                            <br />
                            PropTypes.string : The prop should be a string.
                            <br />
                            PropTypes.func : The prop should be a function.
                            <br />
                            PropTypes.array : The prop should be an array.
                            <br />
                        </p>
                    </div>

                </div>

                <div>
                    <div>
                        <h3>
                            Question Number:3
                        </h3>
                        <p>
                            Tell us the difference between nodejs and express js.
                        </p>
                    </div>
                    <div>
                        <h3>
                            Answer:
                        </h3>
                        <p>
                            Here are some of the key differences between Node.js and Express.js:
                            <br />
                            Node.js is a runtime environment, while Express.js is a web framework built on top of Node.js.
                            <br />
                            Node.js provides low-level APIs for working with streams, network sockets, and file systems, while Express.js provides a higher-level API for handling HTTP requests and responses.
                            <br />
                            Node.js can be used to build a wide range of applications, including desktop applications, command-line tools, and backend services, while Express.js is primarily used for building web applications.
                            <br />
                            Node.js has a steep learning curve, especially for developers who are new to JavaScript, while Express.js is designed to be easy to use and has a gentle learning curve.
                            <br />
                            Overall, Node.js and Express.js are complementary technologies that work well together. Node.js provides a powerful runtime environment for executing JavaScript code, while Express.js provides a flexible and easy-to-use web framework for building web applications.
                            <br />
                        </p>
                    </div>

                </div>

                <div>
                    <div>
                        <h3>
                            Question Number:4
                        </h3>
                        <p>
                            What is a custom hook, and why will we create a custom hook?
                        </p>
                    </div>
                    <div>
                        <h3>
                            Answer:
                        </h3>
                        <p>
                            Custom hook : A custom hook is a reusable function in React that allows we to share logic between multiple components. Custom hooks enable we to abstract away common functionality into a single, easy-to-use hook, which can be shared across different components and even between different projects.
                            <br />
                            Here are a few reasons why we might want to create a custom hook:
                            <br />
                            Reusability: If we find ourself writing the same logic over and over again in multiple components, it might be a good idea to create a custom hook to abstract that logic away. By creating a custom hook, we can share common functionality across different components and even between different projects.
                            <br />
                            Encapsulation: Custom hooks can help us encapsulate logic that is specific to a particular component or feature, making it easier to reason about and maintain. By encapsulating logic in a custom hook, we can ensure that the implementation details are hidden from the rest of our application.
                            <br />
                            Composability: Custom hooks can be composed together to create more complex functionality. By breaking down complex logic into smaller, reusable hooks, we can build more complex features by combining these hooks together.
                            <br />
                            Readability: Custom hooks can make our code more readable by abstracting away complex logic into a single, easy-to-understand function. By using descriptive names and following best practices for hook implementation, we can make our code more readable and easier to understand.
                            <br />
                            Overall, creating a custom hook is a powerful tool for building modular, maintainable, and reusable code in React. By extracting common functionality into a custom hook, we can improve the readability, reusability, and encapsulation of our code, making it easier to reason about and maintain over time.
                            <br />
                        </p>
                    </div>

                </div>

            </Container>

            <Footer></Footer>

        </div>
    );
};

export default Blog;