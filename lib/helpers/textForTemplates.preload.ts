export abstract class HelpersText {

    public static textForPreviewContract0() {
      var text = 'Currently on the add/edit Template page variables field has limited area to be edited. To expand that area and to make UX easier adding/editing variables must be performed in the Edit Variables panel.\n\nUser story:\n\nAs a user I want to add variables in the Edit Variables panel, so that I have more space and better visibility. \n\nReq.EditVariables.Panel.10. The Edit Variables panel icon must be displayed on the Edit Template page. When clicked, the Edit Variables panel opens (if closed, arrow points to the right). All variables are collapsed. '

      return text;
    }


    public static textForPreviewContract1() {
      var text = 'Req.EditVariables.Panel.20. The Edit Variables panel must be closed when the user clicks on the icon (arrow points to the left).\n\nReq.EditVariables.Panel.30. Validation for all fields on the focus change, TAB key press and when the user clicks on the Save/Create Contract button.\n\nReq.EditVariables.Panel.40. When the Edit Variables panel is open, Template body must be scrollable. Inserting variables must be possible from the Edit Variables panel and Variables panel.';
      
      return text;
    }

    public static textForPreviewContract2() {
      var text = 'Req.EditVariables.Panel.50. When the user clicks on the already inserted variable name in the Template body, Edit Variables panel must open, selected variable must be expanded. \n\nReq.EditVariables.Panel.60. When the user expands already inserted variable in the Edit Variable panel, Template body must be scrolled to the expanded variable placement.\nReq.EditVariables.Panel.70. If the screen resolution is bigger and fits both the Variables panel and open Edit Variables panel, the Variables panel must be covered with a lock icon. The following text must be displayed under the lock icon: \" To use variables panel, close the sidebar first\".\n\nReq.EditVariables.Panel.80. Template body content, variables names (including nested variables, when they are inserted in the Template body and in the variable options), variables option texts must have by default font Times New Roman, size 16.';
      
      return text;
    }


    public static textForPreviewContract3() {
      var text = 'Requirements URL variables.\n\nReq.Var.URL.10. Any text entered in the variable of the URL Input Type is considered as a URL, regardless of whether it has a certain prefix (http://, https://, www) or not.\n\nReq.Var.URL.20. A variable text is limited to 2000 symbols.  Input of the 2001 symbol is blocked.';
      
      return text;
    }


    public static textForPreviewContract4() {
      var text = 'Requirements Number variable. \n\nReq.Number.Variable.10. The Option input field is highlighted in red when the user types in any symbols except numbers and a point. The variable cannot be created. The following message appears under the input field:\n\n“Only numbers are allowed in this field”\n\nReq.Number.Variable.20.  The user can enter a point symbol after the number and proceed with creating more options for the list variable. In such a case, the point symbol will be ignored when saving the template (after the user presses the Save button).\n\nReq.Number.Variable.30. If the user enters a point symbol before the number, the “zero” is added automatically when saving the template (after the user presses the Save button).';
      
      return text;
    }


    public static textForPreviewContract6() {
      var text = 'Req.Number.Variable.40. The user can enter only one point symbol. If there are more than one point, the field is highlighted in red with the aforementioned message.\n\n            Req.Number.Variable.50. The variables of the Content Type Number (both Input and List) should automatically place commas every three digits before the point divider.\n\nThe three digits are counted starting from the point divider (for fractions numbers);\n\nIf the number is an integer, then the comma is added starting from the end of the number;\n\nThe comma is added automatically when the user enters the fourth digit and the comma moves automatically to separate each THREE digits when the next digit is added.\n\nThe user should be able to edit the number by adding or removing the digits anywhere in the number, the comma should be moved instantly.\n\nThe user may place a point anywhere in the number. All commas after the point should be deleted automatically';
      
      return text;
    }

    public static textForPreviewContract7() {
      var text = 'extarea \n\nPreconditions:\n\n1. The user is logged in to the system.\n\n2. The user is on the add/edit Template page.\n\nNormal flow:\n\n1. The user clicks on the Variables icon.\n\n2. The Edit Variables panel opens.\n\n3. The user clicks on the New Variable button.\n\n4. The user types the variable name. “Variable #” is displayed by default. ';
      
      return text;
    }

    public static textForPreviewContract8() {
      var text = '5. Choose input, content type textarea.\n\n7. The Edit Variables panel is closed when the user clicks Variables icon.\n\n8. The user clicks on the three dots button, and clicks on the Insert item.\n\n9. Variable is inserted to the template body in the following format <VARIABLE_NAME>.\n\nThe Textarea variable is always inserted as a new paragraph in the text.\n\nIf the cursor was in-between the text, the existing template text will be broken with a new checkbox variable as a new paragraph line\n\nThe user cannot type in any text in the same line as the Textarea variable, the cursor can be placed only after or before the Textarea variable\n\n\"Change the Content Type if you want to change the variable to List\" message must appear if Textarea content type is selected. List radio button is disabled.';
      
      return text;
    }

    public static textForPreviewContract9() {
      var text = 'Search bar\n\nUser story: \n\nAs a user, I want to have a search feature inside of my variables panel/Edit Variables panel, so that I can find my variables in documents with many variables easier and faster.\n\nSearch by variable name/content.\n\nThe system immediately filters out the search results, when the user enters the symbols in the search box.\n\nSearch begins automatically after 1 symbol is entered.\n\nThe variables that do not have the search symbol/s in their names/content are filtered out from the list.\n\nWhen input is cleared - all variables appear in the list again.\n\nOn the Edit Variables panel the variable title matching the search criteria should be displayed. Variables matching the search criteria are collapsed. \n\nOn the Edit Variables panel, Variable name must appear as a search result.\n\nWhen the user clicks on the \"New Variable\" button in the Edit Variables panel, the input and search results are cleared, New variable is expanded.\n\nIf no variables found, display the text:\n\n“There is no variable with such name/content”.';
      
      return text;
    }

    public static textForPreviewContract10() {
      var text = 'Use case: Error inside of the variable (search).\n\nPreconditions:\n\n1. The user is on the edit template page.\n\n2. The Edit Variables panel is open.\n\n3. The user edits the variable and there is an error inside the variable.\n\nFlow:\n\n1. The user clicks on the search bar.\n\n2. The focus is changed to the error area and removed from the search bar.\n\n3. Input to the search bar is disabled.';
      
      return text;
    }
    
  }
  
