import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter, useIonViewDidEnter, useIonViewDidLeave } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
//import './Tab1.css';

const Page2: React.FC = () => {
  const router = useIonRouter();
  //let isDuplicate = false;

  const backButtonListenerFn = (ev: CustomEvent) => {
    ev.detail.register(10, () => {
      router.goBack();
      // console.log(isDuplicate);
      // if (!isDuplicate) {
      //   isDuplicate = true;
      //   router.goBack();
      // }
    });
  };

  useIonViewDidEnter(() => {
    document.addEventListener("ionBackButton", backButtonListenerFn as EventListener);
    console.log("ionBackButton event was added!");
  });

  useIonViewDidLeave(() => {
    document.removeEventListener("ionBackButton", backButtonListenerFn as EventListener);
    console.log("ionBackButton event was removed!");
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
      </IonContent>
    </IonPage>
  );
};

export default Page2;
