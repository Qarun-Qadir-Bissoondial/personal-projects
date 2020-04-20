import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecogService {

  recognizer;
  grammerList;

  languages = ['en-US'];
  grammer = '#JSGF V1.0;';
  showError: boolean = false;
  error: string;

  constructor() {
    this.recognizer = window.SpeechRecognition
      ? new SpeechRecognition()
      // @ts-ignore
      : new webkitSpeechRecognition();

    this.grammerList = window.SpeechGrammarList
      ? new SpeechGrammarList()
      // @ts-ignore
      : new webkitSpeechGrammarList();

    this.grammerList.addFromString(this.grammer, 1);
    this.recognizer.grammars = this.grammerList;
    this.recognizer.lang = 'en-US';
    this.recognizer.interimResults = true;
    this.recognizer.continuous = true;

    // onresult event
    // onspeechend event
    // onerror

    this.recognizer.onstart = () => { console.log('started'); }
    this.recognizer.onsoundstart = (event) => { console.log(event); }
    this.recognizer.onaudiostart = (event) => { console.log(event); }

    this.recognizer.onerror = () => { this.error = event['error']; this.showError = true; }

    this.recognizer.onresult = (result) => {
      console.log(result);
    }

    console.log(this.recognizer);
    console.log(this.grammerList);


  }

  start() {
    this.recognizer.start();
  }

  stop() {
    this.recognizer.stop();
  }
}
