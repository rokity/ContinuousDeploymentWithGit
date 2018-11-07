#Configuration of Git Alias in Developer Machine

This configuration is made only in the PC of the developer.

1.  Open your server-web repo from terminal.
2.  Open configuration git file
     ```bash
    vim .git/config
    ```
3. Add alias 
    ```bash
    [alias]
	    xpush =!git push $1 $2 && ./curl.sh $1 $2
    ```
4. You can customize the script ,change *curl.sh* to what you want to do.
    I raccomanded to don't run bash command here. Use another bash script to run commands like ssh or curl or wget or sql ...