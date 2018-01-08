# LearningAngular

This project was generated with Angular QuickStart (https://angular.io/guide/quickstart).

# Whatever I have learnt so far...

Creating a new Angular app
Syncing with GitHub
Deploying on Azure

# Steps

## Step 1: Create a fresh Angular project (local)

Verify that you are running at least node 6.9.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors, but newer versions are fine.
```
npm install -g @angular/cli
Go to the desired folder on your system and follow these steps:
ng new my-app
cd my-app
ng serve --open
```

## Step 2: Generate a Git repo and sync it with local project folder

Go to Visual Studio Code and open Integrated Terminal, it will directly open the directory of your current project (for example, my-app in our case)
Go to GitHub, create a new repo with no special settings, and copy git part (second section usually) from the page:

Paste this text in your project folder my-app or whatever you named it. 
Git is now synced with your local repo. All you need to do is, 
```
git add .
git commit -m “Your comment for this commit”
git push origin master 
```

## Step 3: Creating deployment script for Azure Windows cloud server.

### 1. Make a web.config file and paste the following code in it. The reason we do this is, IIS isn’t configured to Angular routing, it will redirect to index.html.

```
<?xml version="1.0" encoding="UTF-8"?>
   <configuration>
     <system.webServer>
       <rewrite>
         <rules>
           <rule name="AngularJS" stopProcessing="true">
             <match url=".*" />
             <conditions logicalGrouping="MatchAll">
               <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
               <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
             </conditions>
             <action type="Rewrite" url="index.html" />
           </rule>
         </rules>
       </rewrite>
     </system.webServer>
   </configuration>
```

### 2. Run KuduScript commands to generate deploy.sh/deploy.cmd scripts as per your OS.
```
npm install kuduscript -g
kuduscript -y --node
```

### 3. Edit the 'Deployment' section of the deploy.cmd file and replace with :

```
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: Deployment
:: ----------

:Deployment
echo Handling node.js deployment.

:: 1. Select node version
call :SelectNodeVersion

:: 2. Install npm packages
IF EXIST "%DEPLOYMENT_SOURCE%\package.json" (
 pushd "%DEPLOYMENT_SOURCE%"
 call :ExecuteCmd !NPM_CMD! install
 IF !ERRORLEVEL! NEQ 0 goto error
 popd
)

:: 3. Angular Prod Build
IF EXIST "%DEPLOYMENT_SOURCE%/.angular-cli.json" (
echo Building App in %DEPLOYMENT_SOURCE%…
pushd "%DEPLOYMENT_SOURCE%"
call :ExecuteCmd !NPM_CMD! run build
IF !ERRORLEVEL! NEQ 0 goto error
popd
)

:: 4. Copy Web.config
IF EXIST "%DEPLOYMENT_SOURCE%\web.config" (
 pushd "%DEPLOYMENT_SOURCE%"
:: the next line is optional to fix 404 error see section #8
 call :ExecuteCmd cp web.config dist\
 IF !ERRORLEVEL! NEQ 0 goto error
 popd
)

:: 5. KuduSync
IF /I "%IN_PLACE_DEPLOYMENT%" NEQ "1" (
 call :ExecuteCmd "%KUDU_SYNC_CMD%" -v 50 -f "%DEPLOYMENT_SOURCE%/dist" -t "%DEPLOYMENT_TARGET%" -n "%NEXT_MANIFEST_PATH%" -p "%PREVIOUS_MANIFEST_PATH%" -i ".git;.hg;.deployment;deploy.cmd"
 IF !ERRORLEVEL! NEQ 0 goto error
)
```

## Step 4: Setup Azure server and environment for CI and CD

New -> Web + Mobile -> Web App
```
1. App name: Same as project name
2. Resource Group name: Be sure to keep this different for all projects, it can screw things up.
3. Windows, as I couldn’t figure out the Linux settings :*
4. App Service plan, go for the Free one :*
5. Pin to Dashboard.:* 
6. Hit Create. This might take some time, once it is done, go to this resource, if you can’t find it, go to Dashboard and search for your app name.
```
Once you are in this resource, select Deploy Options from the vertical menu items of this resource.
It will give you an option of linking this app with your Cloud repo system.
Select GitHub and enter credentials, it will give you a list of all the repos and their branches. 
Select the said project & branch. Hit Ok. This will take a while as this is the main building and running of the scripts that takes place.
Hit Deploy Options again, it will show you run-time steps and scripts running. If this is successful. 
Hit Overview and then Browse on the web-app you created, to see the hosted website.

# References
```
https://angular.io/guide/quickstart
http://techbrij.com/azure-app-services-github-deploying-mean
https://stackoverflow.com/questions/37487046/deploy-angular-2-with-azure-webapp
```
# time-travel
# time-travel
# time-travel
