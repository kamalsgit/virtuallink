## Installation

You can install this plugin manually through (via) wordpess back/admin end. It will also support with composer and can be installed through (via) Composer which means, it can be installed by adding the below code in the composer.json 

or via command line with: 

```json
{
	"require-dev": {
		"virtuallink/virtuallink": "^2.0"
	}
}


```


```
composer require virtuallink/virtuallink --dev 

```

-------------


## Description

Based on your task requirement, I have created a custom endpoint url and listed the users and in addition to that, I have also listed specific user's comments/posts (Additional features) using Api.

This is the custom endpoint url : https://mydomain.com/user-list.


## API Reference

I did get the user list from the following api references (https://jsonplaceholder.typicode.com/)

## Features

   * I have shown the dropdown in the following link https://mydomain.com/user-list.
   * By default, we are displaying the user lists and once you change the value in dropdown then the result will be shown at this link (https://mydomain.com/user-list) based on the dropdown value you selected.
   * And if you click on any of the features like username / name/id, e.t.c then it will show the corresponding user details without a page load.
   * I have shown all the result data in the table formats and used css styles to design the tables.
   * You can overwrite/edit the plugin functions using hooks.
   * You can create the same template name in theme folder and then you can overwrite/edit the plugin template.

## Testing    

   * I checked my work done with the latest version of the wordpess and it does work in all the versions.
   * I tested with the PHP CodeSniffer and passed/Cleared the errors.
   * I then tested with the unit test and passed as well.
   
## Dependency    

This plugin does not need any dependency plugins, so we have not used any dependency plugins.

## License    

We do not have a license for this plugin. Its a license free plugin.

