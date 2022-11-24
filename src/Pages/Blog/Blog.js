import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What are the different ways to manage a state in a React application?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><b>The Four Kinds of React State to Manage
                            Local state. Global state. Server state. URL state.</b><br />Which state management is best in React? React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does prototypical inheritance work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is a unit test? Why should we write unit tests?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">React vs. Angular vs. Vue?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.

                            React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.

                            They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.

                            Each framework is component-based and allows the rapid creation of UI features.

                            However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;