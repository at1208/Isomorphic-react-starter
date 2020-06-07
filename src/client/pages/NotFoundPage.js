import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <div className='text-center'>
            <h1>ERROR 404</h1>
         </div>
};

export default {
  component: NotFoundPage
};
