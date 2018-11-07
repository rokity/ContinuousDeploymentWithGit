#Configuration of a deamon on Ubuntu/Debian
1.  Create the file
    ```bash
    cd /etc/systemd/system && vim webhook.service
    ```
2.  Paste the content of the file that it's inside this folder of the repo
3.  Change *WorkingDirectory* value to the directory where it's you service for deploy.
4.  Change *ExecStart* value if your service for deploy it's in NodeJS.
5.  Save the file and enable this service through this command 
    ```bash
    sudo systemctl enable webhook.service
    ```
6. Start this service 
    ```bash
    sudo systemctl start webhook.service
    ```
7.  Now your service it's enabled and run