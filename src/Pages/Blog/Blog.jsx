import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className='gap-4 mt-5'>
              <div>
                <div>
                    <h3>
                    Question:
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
            </Container>
            
            <Footer></Footer>

        </div>
    );
};

export default Blog;