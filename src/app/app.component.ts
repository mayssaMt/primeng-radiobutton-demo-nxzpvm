import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedOption: any;
  correctedName!: string;
  gitLink!: string;
  questionList: any = [];
  isToggleable = true;
  showContent = true;
  submitted = false;
  title: string = 'Vous allez corrigé à ';
  question: any;
  jsonObject: any = {
    code: 200,
    corrections: [
      {
        correctionId: 1,
        correctedId: 57,
        firstName: 'mayssa',
        lastName: 'mtibaa',
        dayId: 469,
        submittedWork: 'https://gitlab.com/mayssamtibaa/monrepo',
        corrected: 0,
        correctionResults: [
          {
            orderDescription:
              'QCM Chapter 6 : Est-ce que votre collègue a eu une note >= 75%',
            correctionResult: 1,
          },
          {
            orderDescription:
              'QCM 2 : Est-ce que votre collègue a eu une note >= 25%',
            correctionResult: 2,
          },
          {
            orderDescription:
              'QCM 2 : Est-ce que votre collègue a eu une note >= 50%',
            correctionResult: 3,
          },
          {
            orderDescription:
              'QCM 2 : Est-ce que votre collègue a eu une note >= 75%',
            correctionResult: 4,
          },
        ],
      },
    ],
    message: 'Corrections chargées avec succès !',
  };
  ngOnInit() {
    this.correctedName =
      this.jsonObject.corrections[0].firstName +
      ' ' +
      this.jsonObject.corrections[0].lastName;
    this.gitLink = this.jsonObject.corrections[0].submittedWork;
    this.questionList = this.jsonObject.corrections[0].correctionResults;
  }

  changeLegend() {
    this.title = 'Vous avez soumis votre correction à ';
    this.isToggleable = !this.isToggleable;
    this.showContent = !this.showContent;
  }
}
