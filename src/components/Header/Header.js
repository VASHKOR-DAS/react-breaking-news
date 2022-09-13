import React from 'react';
import { Button } from 'react-bootstrap';



const Header = () => {
    return (
        <div>

            {/* <div class="container mt-3">
                <div class="mt-4 p-5 bg-primary text-white rounded">
                    <h1>Jumbotron Example</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                </div>
            </div> */}

            <div class="container-fluid bg-light text-dark p-5">
                <div class="container bg-light p-5">
                    <h1 class="display-4 fw-bold">Breaking News</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias non quam nemo? Totam voluptas ex incidunt quasi iusto illo, officiis voluptate sit magni iste voluptatibus ad tempora doloribus illum.</p>

                    <Button type="submit">Button</Button>

                </div>
            </div>


        </div>
    );
};

export default Header;