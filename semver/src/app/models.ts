export interface VersionNumber {
    major: number;
    minor: number;
    patch: number;
}

export type VersionType = 'major' | 'minor' | 'patch';

export interface ChangelogEntry {
    type: VersionType;
    oldValue: number;
    newValue: number;
}