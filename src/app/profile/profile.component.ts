import { Component, OnInit } from '@angular/core';
import { DateHelper } from '../helpers/date-helper';
import { profileConfig } from '../config/profile.config';
import { Contacts, Course, JobPosition, Language, Skill, SocialMedia } from '../config/profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  private profileConfig = profileConfig;

  constructor() { }

  ngOnInit(): void {
    console.log(this.workExperience);
    console.log(this.education);
        
  }

  get name(): string {
    return this.profileConfig.name;
  }

  get occupation(): string {
    return this.profileConfig.occupation;
  }

  get aboutMe(): string {
    return this.profileConfig.aboutMe;
  }

  get contacts(): Contacts {
    return this.profileConfig.contacts;
  }

  get socialMedia(): SocialMedia {
    return this.profileConfig.socialMedia;
  }

  get laguages(): Language[] {
    return this.profileConfig.laguages;
  }

  get skills(): Skill[] {
    return this.profileConfig.skills;
  }

  get education(): Course[] {
    const courses = this.profileConfig.education.map(course => {
      course.period = DateHelper.formatPeriod(course.startDate, course.endDate, 'course');
      return course;
    });
    return this.sort(courses) as Course[];
  }

  get workExperience(): JobPosition[] {
    const jobs = this.profileConfig.workExperience.map(job => {
      job.period = DateHelper.formatPeriod(job.startDate, job.endDate, 'job');
      return job;
    });
    return this.sort(jobs) as JobPosition[];
  }

  get age(): string {
    const birthDate = DateHelper.dateFactory(this.profileConfig.birthDate);
    const today = new Date();
    const m = today.getMonth() - birthDate.getMonth();
    let age = today.getFullYear() - birthDate.getFullYear();

    if(m < 0 || m === 0 && (today.getDate() < birthDate.getDate())) {
      age--;
    }
    return `${age} yo`;
  }

  private sort(target: Course[] | JobPosition[]): Course[] | JobPosition[] {
    return target.sort(
      (a: Course | JobPosition, b: Course | JobPosition) => {
        if(!a.endDate) {
          return -1;
        }
        if(DateHelper.dateFactory(a.endDate) > DateHelper.dateFactory(b.endDate)) {
          return -1;
        }
        return 0;
    });
  }

}
