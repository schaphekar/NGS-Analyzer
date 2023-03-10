# NGS Analyzer: A Sequencing Performance Analysis Application

## Concept

Next-generation sequencing analysis systems require multidisciplinary efforts that involve hardware engineering, biochemistry, and software engineering along with tools to help assess sequencing results.

Several metrics are used to evaluate the performance of the instrument, chemical setups, and algorithms when analyzing a sequencing run, such as the base-call error rate, number of mapped reads, and average read length. These metrics are calculated by aligning the sequences to a well-annotated reference template and are used to determine experimental performance and benchmark the system as improvements are made. 

NGS Analyzer is an application created with the goal of keeping up with the constant production of NGS data from many instruments, while also providing an interface for scientists and engineers to analyze runs for new assays and sequencing platforms. This includes a scalable system which can be used to create analysis jobs and feed the output data back into a visual reporting view.

## Setup Instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run `npm start` which runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Running `npm test` launches the test runner in the interactive watch mode.\

Running `npm run build` builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.