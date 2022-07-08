import { FirebaseApp, initializeApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'
import firebaseConfig from './FirebaseConfig'

export class FirebaseRepository {
    auth: Auth;
    app: FirebaseApp;
    db: Firestore;
    collectionName = '';

    constructor () {
      this.app = initializeApp(firebaseConfig)
      this.auth = getAuth(this.app)
      this.db = getFirestore()
    }
}
