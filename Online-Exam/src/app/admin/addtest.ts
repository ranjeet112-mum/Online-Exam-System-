import { Time } from "@angular/common";

export interface Addtest {
    subjectname : string;
    examdate : string;
    testduration : string;
    levelonefile : FileList | null;
    leveltwofile : FileList | null;
    levelthreefile : FileList | null;
    levelonemarks : string;
    leveltwomarks : string;
    levelthreemarks : string;
    admin : string
}
