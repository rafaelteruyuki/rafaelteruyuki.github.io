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
    throw Error('Method needs to be implemented.');
  }

}
