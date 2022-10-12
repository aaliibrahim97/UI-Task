import { Component, HostListener, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {
  arr: any[] = [{
    title:'“We need to have better and smarter food supply chains to prevent furt...  ',
    describe:"World Union of Wholesale Markets (WUWM) Conference in Abu Dhabi to Address Supply Chain Risks, Challenges, a...",
    date:'September 27, 2022'
}, {
    title:'AD Ports Group Welcomes First International Shipment at Mugharraq Port... ',
    describe:"Recent Certification Enables Port to Receive International and Local Vessels including container feeders, bu...",
    date:'September 29, 2022'
}, {
    title:'“We need to have better and smarter food supply chains to prevent furt...  ',
    describe:"World Union of Wholesale Markets (WUWM) Conference in Abu Dhabi to Address Supply Chain Risks, Challenges, a...",
    date:'September 27, 2022'
}, {
    title:'AD Ports Group’s SAFEEN Feeders Signs Long-Term Charter Agreement with...  ',
    describe:"SAFEEN Feeders to invest AED 375 million to Purchase Three Containerships and Support Trade on Key Routes&nb...",
    date:'September 26, 2022'
}, {
    title:'AD Ports Group’s SAFEEN Feeders and Invictus Investment Sign Strategic...  ',
    describe:"Total Capital Commitment for the Five Vessels will be AED 463 million Abu Dhabi, UAE – 26 September 2...",
    date:'September 26, 2022'
}, {
    title:'AD Ports Group Reaches Key Milestone in Construction of CMA Terminals ...  ',
    describe:"First 90-Tonne Block Placed for Construction of Quay Wall During Special Ceremony Abu Dhabi, UAE – 22...",
    date:'September 22, 2022'
},{
  title:'AD Ports Group Reaches Key Milestone in Construction of CMA Terminals ...  ',
  describe:"First 90-Tonne Block Placed for Construction of Quay Wall During Special Ceremony Abu Dhabi, UAE – 22...",
  date:'September 22, 2022'
},{
  title:'AD Ports Group Reaches Key Milestone in Construction of CMA Terminals ...  ',
  describe:"First 90-Tonne Block Placed for Construction of Quay Wall During Special Ceremony Abu Dhabi, UAE – 22...",
  date:'September 22, 2022'
}, {
  title:'AD Ports Group Reaches Key Milestone in Construction of CMA Terminals ...  ',
  describe:"First 90-Tonne Block Placed for Construction of Quay Wall During Special Ceremony Abu Dhabi, UAE – 22...",
  date:'September 22, 2022'
}];
  totalCards: number = this.arr.length;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number;
  totalPages: number;
  overflowWidth: string;
  cardWidth: string;
  containerWidth: number;
  @ViewChild("container", { static: true, read: ElementRef })
  container: ElementRef;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }

  ngOnInit() {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 400);
  }

  changePage(incrementor) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }

}
