# Configure an Hooks in a GitLab Server 

If you use git server it's the same but the foler it's different and you don't need to create the folder 'custom_hooks' because you can use the foler 'hooks'.

1.  Change 'yourusername' with the name of you user and server-web.git with the name of you repo
    ```bash
    cd /var/opt/gitlab/git-data/repositories/yourusername/server-web.git
    ```
2.  Create folder 'custom_hooks' for GitLab
    ```bash
    mkdir custom_hooks && cd custom_hooks
    ```
3.  Create the script and paste the source code from the file 'post-receive' that it's in this folder of the repo. Make the script executable.
    ```bash
    vim post-receive && chmod +x post-receive
    ```
4. Change the owner of the file
    ```bash
    chown git post-receive
    ```
5. Personalize the script that run when the push event in this branch is triggered.
    Change the script *sh ./update_master_gitlab.sh* to what you want to do.
    I prefer to run bash script , because it's more secure.
    