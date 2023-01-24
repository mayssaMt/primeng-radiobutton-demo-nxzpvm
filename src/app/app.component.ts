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
  options: Array<any> = [
    { name: 'oui', id: 1, selected: false },
    { name: 'non', id: 2, selected: false },
  ];
  answers: Array<any> = [];
  jsonObject: any = {
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
            selected: 0,
          },
          {
            orderDescription:
              'QCM 2 : Est-ce que votre collègue a eu une note >= 25%',
            correctionResult: 2,
            selected: 0,
          },
          {
            orderDescription:
              'QCM 2 : Est-ce que votre collègue a eu une note >= 50%',
            correctionResult: 3,
            selected: 0,
          },
          {
            orderDescription:
              'QCM 2 : Est-ce que votre collègue a eu une note >= 75%',
            correctionResult: 4,
            selected: 0,
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

  onSelect(question: any, option: any) {
    this.questionList.forEach((x) => {
      if (x.correctionResult == question.correctionResult) {
        if (option.id == 1) {
          x.selected = 1;
        } else if (option.id == 2) {
          x.selected = 0;
        }
      }
      // console.log(x.correctionResult);
    });
    console.log(this.questionList);
  }
  onSubmit() {}
}
