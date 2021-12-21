import { Component, OnInit } from '@angular/core';
import { profileConfig } from './profile.config';
import { Contacts, Course, JobPosition, Language, Skill, SocialMedia } from './profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private profileConfig = profileConfig;

  constructor() { }

  ngOnInit(): void {
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
    throw Error('Method needs to be implemented.');
  }

  get workExperience(): JobPosition[] {
    throw Error('Method needs to be implemented.');
  }

  get age(): string {
    const birthDate = this.dateFactory(this.profileConfig.birthDate);
    const today = new Date();
    const m = today.getMonth() - birthDate.getMonth();

    let age = today.getFullYear() - birthDate.getFullYear();

    if(m < 0 || m === 0 && (today.getDate() < birthDate.getDate())) {
      age--;
    }

    return `${age} yo`;
  }

  private dateFactory(stringDate: string): Date {
    return new Date(stringDate.split('-').reverse().join(','));
  }

}
