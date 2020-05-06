import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainMenuService } from "../../shared/services/main-menu.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getWorkProject } from '../../shared/models/work-project-data.model';

@Component({
  selector: "app-current-work-info",
  templateUrl: "./current-work-info.component.html",
  styleUrls: ["./current-work-info.component.scss"],
})
export class CurrentWorkInfoComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  data = null;

  constructor(
    private menuService: MainMenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.initData();
  }

  ngOnInit() {

  }

  openMenu() {
    this.menuService.setShowMenuValue(true);
  }

  navigate(url: string) {
    if (url) {
      this.router.navigateByUrl(url);
    }
  }

  private initData() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(({id}) => {
      this.data = getWorkProject(id);
      if (!this.data) {
        this.navigate('/work');
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
