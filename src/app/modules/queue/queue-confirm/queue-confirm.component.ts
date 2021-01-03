import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Merchant } from 'app/models/merchant';
import { AuthService } from 'app/services/auth.service';
import { FirestoreService } from 'app/services/firestore.service';
import { QueueService } from 'app/services/queue.service';
import { DocRef } from 'app/shared/enum/DocRef.enum';

@Component({
  selector: 'app-queue-confirm',
  templateUrl: './queue-confirm.component.html',
  styleUrls: ['./queue-confirm.component.css']
})
export class QueueConfirmComponent implements OnInit {

  id: string;
  merchant: Merchant;

  currentPos: Promise<number>;
  userPos: Promise<number>;

  constructor(
    private route: ActivatedRoute,
    private merchantService: FirestoreService<Merchant>,
    private queueService: QueueService,
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

      this.initialisePromise();
    });

    this.auth.createUser().catch(msg => {
      this.router.navigate([`/login/${this.id}`]);
    });
  }

  initialisePromise() {
    this.currentPos = new Promise<number>(resolve => {
      // TODO: create another method in queueService to generate current position
      resolve(1);
    });

    this.userPos = new Promise<number>(resolve => {
      this.auth.createUser().then(currentUser => {
        this.queueService.getUserPosition(currentUser.id, this.id).then(no => {
          resolve(no);
        });
      });
    });
  }

  backToHome() {
    this.router.navigate(['/home']);
  }

  getRemarkContent() {
    return "No remarks."
  }
}
