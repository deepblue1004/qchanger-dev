import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Merchant } from 'app/models/merchant';
import { AuthService } from 'app/services/auth.service';
import { FirestoreService } from 'app/services/firestore.service';
import { DocRef } from 'app/shared/enum/DocRef.enum';

@Component({
  selector: 'app-queue-confirm',
  templateUrl: './queue-confirm.component.html',
  styleUrls: ['./queue-confirm.component.css']
})
export class QueueConfirmComponent implements OnInit {

  id: string;
  merchant: Merchant;

  constructor(
    private route: ActivatedRoute,
    private merchantService: FirestoreService<Merchant>,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['merchantId'];

      this.merchantService.getById(this.id, DocRef.MERCHANT).subscribe(m => {
        this.merchant = m.payload.data();

        if (this.merchant) {   // If merchant exist
          this.merchant.id = this.id;
        }
        else {
          this.router.navigate(['/home']);
        }
      });
    });

    this.auth.createUser().catch(msg => {
      this.router.navigate([`/login/${this.id}`]);
    });
  }

  backToHome() {
    this.router.navigate(['/home']);
  }

  getCurrentQueueNo() {
    return 5;
  }

  getUserQueueNo() {
    return 8;
  }

  getRemarkContent() {
    return "No remarks."
  }
}
