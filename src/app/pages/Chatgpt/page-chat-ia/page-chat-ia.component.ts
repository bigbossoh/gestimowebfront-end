import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-page-chat-ia',
  templateUrl: './page-chat-ia.component.html',
  styleUrls: ['./page-chat-ia.component.css']
})
export class PageChatIaComponent implements OnInit {
 queryFormGroup!:UntypedFormGroup
 messages=[
  {"role": "user", "content": "Say this is a test!"}
 ];
 result:any;
  constructor(private fb:UntypedFormBuilder,private HttpClient:HttpClient) { }

  ngOnInit(): void {
    this.queryFormGroup=this.fb.group({
      query:this.fb.control("")
    })
  }
  handleAskGPT(){
    let url="https://api.openai.com/v1/chat/completions";
    let httpHeaders= new HttpHeaders().set("Authorization","Bearer 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");
    this.messages.push({
      role:"user",
      content:this.queryFormGroup.value.query
    })
    let payload={
      model:"gpt-3.5-turbo",
      "messages": this.messages
    }
    this.HttpClient.post(url,payload,{headers:httpHeaders})
    .subscribe({
      next:(resp)=>{

        this.result=resp;
        //console.log(this.result)
        this.result.choices.forEach((choice:any)=>{
          this.messages.push({
            role:"assistant",content:choice.message.content
          })
        })
      },
      error(err) {

      },
    })
  }

}
