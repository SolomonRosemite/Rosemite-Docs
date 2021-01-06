---
id: WPF-ActivityLogger-Config
title: 📝Config
---

## Introduction

The Config file allows you to customize how the Activity Logger operates and
saves activities. This file can be found here:

```
C:\Users\[Username]\TMRosemite\ActivityLogger\Config.json
```

and looks something like this:

```json
{
  "IncludesProcessName": {
    "fox": "Firefox"
  },
  "IsProcessName": {
    "devenv": "Visual Studio",
    "idea64": "IntelliJ IDEA"
  },
  "IncludesWindowName": {
    "FL Studio": "FL Studio"
  },
  "IsWindowName": {
    "FL Studio 20": "FL Studio"
  },
  "IgnoreProcessName": [
    "ApplicationFrameHost",
    "task manager",
    "explorer",
    "Spotify"
  ],
  "DontUseFirebaseClient": true,
  "userSecret": "85ZaiNuW2jfS5tUfQAyY"
}
```

### Config Structure

The Config has a few unique properties to archive different goals. The
properties: `IncludesProcessName`, `IsProcessName`, `IncludesWindowName` and
`IsWindowName` work the same but have differences.

Let's take a closer look at each property of the Config file:

#### IncludesProcessName

The `IncludesProcessName` property

#### IsProcessName

The `IsProcessName` property maps a process name to another name. In this
example the process name `devenv` is being mapped to `Visual Studio`.

#### IncludesWindowName

The `IncludesWindowName` property

#### IsWindowName

The `IsWindowName` property

#### IgnoreProcessName

The `IgnoreProcessName` property

#### DontUseFirebaseClient

The `DontUseFirebaseClient` property

#### userSecret

This Secret is being used for authenticating with the mobile app.
[For more info about the mobile app here.](https://rosemitedocs.web.app/docs/WPF-ActivityLogger-getting-started#mobile-app)

Make sure to keep this secret hidden. If you decide to reset your secret do the
following:

1. Stop the Process "FirebaseClient.exe" (if running).
2. Delete the "userSecret" property and make sure to not corrupt the json file.
3. Start the "FirebaseClient.exe". The file can be found here.

```
C:\Users\[Username]\TMRosemite\ActivityLogger\FirebaseClient.exe
```

After a few Seconds a new `secret` will be generated. Keep in mind that if you
use the Mobile app, to sign out and sign in with the new `secret`.
[For more Info about this here.](https://rosemitedocs.web.app/docs/WPF-ActivityLogger-Installation#mobile-installation)

Learn more about WPF-ActivityLogger:

- [GitHub Repo](https://github.com/SolomonRosemite/WPF-ActivityLogger/)
