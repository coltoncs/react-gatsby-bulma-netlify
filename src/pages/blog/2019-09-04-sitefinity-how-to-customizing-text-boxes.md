---
templateKey: blog-post
title: 'Sitefinity How-To: Customizing Text Boxes'
date: 2017-11-21T04:07:58.345Z
description: >-
  I’ve recently started a series on leveraging customization in Sitefinity to
  enhance the customer experience. Following along with the theme of
  customization, my next Sitefinity How-To focuses on customizing text boxes.
  Sitefinity’s RadEditor is a powerful text box editor when extended on its
  out-of-the-box features. Just by customizing the markup that powers the
  RadEditor, users can easily make changes to the look and feel of it. This
  guide will require some knowledge of XML and ASP.NET. 
featuredpost: false
featuredimage: /img/textboxes-howto.jpg
tags:
  - how-to
  - tutorial
  - sitefinity
---
![How-To: Customize Text Boxes in Sitefinity](/img/textboxes-howto.jpg "Sitefinity How-To: Customizing Text Boxes")

To get started, create a new file named ToolsFile.xml. This will be the markup file for the tools that we can add to a RadEditor. ToolsFile has a specific file structure, in which all tools and configurations are wrapped in a parent `root` tag. After the `root` tag, add a `headertools` wrapper that will contain a couple of commonly used toolbar buttons. After the opening tag, write four `tool` tags with a name=”” parameter. The `tool` names will be Undo, Redo, MobileEdit, and ToggleScreenMode. “MobileEdit” and “ToggleScreenMode” have additional position=”Right” attributes. 

![](/img/textboxes-1.png)

Close off the `headertools` so that your ToolsFile.xml looks like the above snippet. Open a new tag `editortoolstrip name=”Apply Formatting”` that will hold common text formatting options. Add three `EditorTool` tags with name attributes of Bold, Italic, and Underline respectively.

![](/img/textboxes-2.png)

Once again, close off the editor `toolstrip` so that your code resembles the above snippet. Next, open up a `tools` tag that will hold some miscellaneous controls. Set a `name="MainToolbar"` attribute and an `enabled="true"` attribute. After the opening `tools` tag, set six `tool` tags with the names "Indent", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyFull", "FontName", "FontSize", and "FontColor" respectively. Your code should look like the following:

![](/img/textboxes-3.png)

Since a `FontName` tools is implemented, users can further define which fonts to include. Set four `item` tags with the respective attributes "Arial", "Arial Narrow", "Arial Black", and "Courier". Users can also add a `cssFiles` tag to hold CSS files that can be selected by the text box. Inside the `cssFiles` tag, `item name="url"` tags hold URLs to the CSS files. Close off the `cssFiles` and close off the `root` tag to complete the file. The completed file should look like:

![](/img/textboxes-4.png)

Finally, point to the configured ToolsFile.xml in your RadEditor declaration, like so: 

`<telerik:RadEditor RenderMode="Lightweight" ToolsFile="~/ToolsFile.xml" ID="RadEditor2" runat="server"></telerik:RadEditor>`



This is just one of the many ways that the Sitefinity CMS allows for flexible customization. Simply by creating a custom XML file and adding it to your Sitefinity's RadEditor, you can create custom text box controls in no time. This only illustr ates the immense power that users have when customizing their unique Sitefinity instances, and just how easy of a task that it can prove to be. This How-To guide was heavy on coding and only rendered changes to Sitefinity's backend for users. Sitefinity's customization options don’t end there, though. Be sure to check out my other blog posts on customizing widget templates, forms, and the built-in Sitefinity navigation in order to get a sense of the breadth of capabilities that the Sitefinity CMS allows for.
