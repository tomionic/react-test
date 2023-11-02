import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
//import './Tab1.css';

const Page1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList>
        <IonItem routerLink="/tab1/page1/page2">
          <IonLabel>Go To Page 2</IonLabel>
        </IonItem>
      </IonList>
        <ExploreContainer name="Page 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Page1;
