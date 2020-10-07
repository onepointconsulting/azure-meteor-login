import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Info = () => {
  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });

  return (
    <div>
      <h2>Azure Login Test App</h2>
      <p>The purpose of this app is to demo the integration of the Azure authentication with Meteor.</p>
    </div>
  );
};
