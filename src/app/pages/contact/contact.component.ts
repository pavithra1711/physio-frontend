import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  // ✅ Form model (clean + scalable)
  form: any = {
    name: '',
    mobile: '',
    service: '',
    message: ''
  };

  loading: boolean = false;

  constructor(private api: ApiService) {}

  // ✅ Submit contact form
  submitForm() {

    this.loading = true;

    this.api.sendContact(this.form).subscribe({
      next: (res: any) => {

        this.loading = false;

        alert('Your message has been sent successfully!');

        // reset form
        this.form = {
          name: '',
          mobile: '',
          service: '',
          message: ''
        };
      },

      error: (err: any) => {
        this.loading = false;
        console.log(err);
        alert('Error sending message. Please try again.');
      }
    });
  }

  // ✅ Test email endpoint (debug feature)
  sendTestEmail() {
    this.api.testEmail().subscribe({
      next: (res: any) => {
        alert(res); // Email Sent Successfully
      },
      error: (err: any) => {
        console.log(err);
        alert('Email failed');
      }
    });
  }

  // ✅ Optional: WhatsApp integration (recommended for clinic)
  sendToWhatsApp() {
    const text =
      `📩 New Contact Request:%0A` +
      `Name: ${this.form.name}%0A` +
      `Mobile: ${this.form.mobile}%0A` +
      `Service: ${this.form.service}%0A` +
      `Message: ${this.form.message}`;

    const url = `https://wa.me/919150520609?text=${text}`;
    window.open(url, '_blank');
  }
}