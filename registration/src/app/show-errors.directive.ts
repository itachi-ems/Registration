import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShowErrors]'
})
export class ShowErrorsDirective {


  @Input('appShowErrors') data:any;
  constructor(private el:ElementRef) { }

  
  checkErrors()
  {
    
    if(this.data.name==='firstname')
     {
        if(this.data.invalid && (this.data.dirty||this.data.touched))
        {
          
            if(this.data.errors.required)
            {
              
              this.el.nativeElement.style.border="thick solid red";
      
            }
            else if(this.data.errors.pattern)
            {
              this.el.nativeElement.style.border="thick solid yellow";

            }
          
        }
        else
        {
          this.el.nativeElement.style.border="thick solid green";

        }

     }
     else if(this.data.name==='lastname')
     {
       
        if(this.data.invalid && (this.data.dirty||this.data.touched))
        {
            if(this.data.errors.required)
            {
              
              this.el.nativeElement.style.border="thick solid red";
      
            }
            else if(this.data.errors.pattern)
            {
              this.el.nativeElement.style.border="thick solid yellow";

            }
          
        }
        else
        {
          this.el.nativeElement.style.border="thick solid green";

        }

     }
     else if(this.data.name==='password')
     {
       
        if(this.data.invalid && (this.data.dirty||this.data.touched))
        {
            if(this.data.errors.required)
            {
              
              this.el.nativeElement.style.border="thick solid red";
      
            }
            else if(this.data.errors.pattern)
            {
              this.el.nativeElement.style.border="thick solid yellow";

            }
          
        }
        else
        {
          this.el.nativeElement.style.border="thick solid green";

        }

     }
     
     else if(this.data.name==='country')
     {
      
        if(this.el.nativeElement.value==="None" && (this.data.dirty||this.data.touched))
        {
            console.log(this.data)
              
              this.el.nativeElement.style.border="thick solid red";
      
            
           
          
        }
        else
        {
          this.el.nativeElement.style.border="thick solid green";

        }

     }
     else if(this.data.name==='phoneNo')
     {
       
        if(this.data.invalid && (this.data.dirty||this.data.touched))
        {
            if(this.data.errors.required)
            {
              
              this.el.nativeElement.style.border="thick solid red";
      
            }
            else if(this.data.errors.pattern)
            {
              this.el.nativeElement.style.border="thick solid yellow";

            }
          
        }
        else
        {
          this.el.nativeElement.style.border="thick solid green";

        }

     }
     else if(this.data.name==='emailadd')
     {
       
        if(this.data.invalid && (this.data.dirty||this.data.touched))
        {
            if(this.data.errors.required)
            {
              
              this.el.nativeElement.style.border="thick solid red";
      
            }
            else if(this.data.errors.pattern)
            {
              this.el.nativeElement.style.border="thick solid yellow";

            }
          
        }
        else
        {
          this.el.nativeElement.style.border="thick solid green";

        }

     }
     
     
     
    
  }
  @HostListener('change') onChange()
  {
    
    this.checkErrors();
  }
  @HostListener('keyup',['$event']) onKeyUp(e:any)
  {
        
      this.checkErrors();
    
  }

  @HostListener('paste') onPaste()
  {
    this.checkErrors();
  }

  







}
