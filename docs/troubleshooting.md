---
id: troubleshooting
title: ⚙️ Troubleshooting
---

## WPF-ActivityLogger-no-qr-code

There are multiple reasons why potentially the QR-Code wouldn't show.

### Config UserSecret is not set.

Open the Config.json file under this path.

```
C:\Users\[username]\TMRosemite\ActivityLogger\Config.json
```

If this json doesn't have a UserSecret its probably because the FirebaseClient
is not active.

To Resolve this issue do the following:

1. Open the System Tray
2. Right-Click the App that says "Activities"

#### Scenario 1. The FirebaseClient is not Running.

3. If there is an option to start the FirebaseClient select it. It will take a
   few Seconds to start just to be sure wait one Minute.
4. Then Refresh the Config.json. Now you should be seeing a UserSecret.
5. If thats the case you can open the My Activities app on your Desktop and
   navigate to the Settings. There your should now see your QR-Code.

#### Scenario 2. The FirebaseClient is Running. But still no QR-Code

3. If there is an option to restart the FirebaseClient select it. It will take a
   few Seconds to start just to be sure wait one Minute.
4. Follow all the steps from Scenario 1 but skip the Step 3.

Still couldn't resolve your Problem? Feel free to open an Issue:

- [GitHub Repo](https://github.com/SolomonRosemite/WPF-ActivityLogger/issues)
