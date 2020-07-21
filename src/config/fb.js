
import firebase from 'firebase'

const config = {

}

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
