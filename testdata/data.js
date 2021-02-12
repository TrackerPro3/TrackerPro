module.exports = {

    login : {

        defaultPassword :   'password',  // Default Value
        newPassword     :   'Password',  // Default Value

        Build           :   'https://azrtpqaw16.trackerpro.cc/Charlie',
        Username        :   'Test4',      //suryateja.davuluri@ryan.com
        Password        :   'Password', 
        Org             :   'QA - Surya',
        Browser         :   'Edge'    // Chrome or Edge or Leave it Blank for Chromium
 
    },

    import : {

        MappingType     :   'XML',      // TEXT or XML
        HolderName      :   'Test Holder Name 1',
        FileName        :   'uploads/DDL.XML'   // Do not remove uploads/
    },

    filemapping : {

        MappingName     :   'Test Excel Mapping',
        MappingDesc     :   'Test Excel Mapping Description',
        MappingType     :   'Excel',     // Excel or Delimited or Fixed
        Delimiter       :   '|',
        MappingSheet    :   'mapexcel'     // FileMappingDelimited or FileMappingExcel
    },

    holder : {

        HolderName      :   'Test Holder 8.3.00',
        EntityName      :   'Test Entity Name',
        Classification  :   'C',
        FEIN            :   '987654321',
        Address         :   'Test Address',
        City            :   'Test City',
        State           :   'FL',
        Zip             :   '123456789',
        INCState        :   'FL',

        ContactType     :   'Report',
        ContactName     :   'Test Contact Name',
        ContactEmail    :   'testemail@test.com',
        ContactState    :   'FL',

        StateSpecific   :   'KS',

        UDFName         :   'U',
        StatIndName     :   '%',
        StatIndDesc     :   'SI1'
        

    },

    

    
    
    letter : {

        HolderName      :   'DDL'

    },



    report : {

        ReportCategory  :   'S',     // S or C
        HolderList      :   ['DDL'], // ['Card','DDL','WOF','PJ Corporation']
        ReportGroup     :   'Separate',     //Separate, By Holder/State, By Holder, By State, All
        ReportDetail    :   'Finalize',     // Preview or Finalize
        DatePaid        :   '12012020',     // N or Date
        ReportType      :   'Final',     // Prelim or Final
        StateList       :   'RI',   //['AK','KS','MD','MT','ND','UT','VT']
        StateList1      :   ['AK','KS','MD','MT','ND','UT','VT'],   //['AK','KS','MD','MT','ND','UT','VT']


    },


    submitreport : {

        ReportCategory  :   'S',     // S or C
        HolderList      :   ['DDL'], // ['Card','DDL','WOF','PJ Corporation']
        ReportGroup     :   'Separate',     //Separate, By Holder/State, By Holder, By State, All
        ReportDetail    :   'Finalize',     // Preview or Finalize
        DatePaid        :   '10102020',     // N or Date
        ReportType      :   'Final',     // Prelim or Final
        StateList       :   ['KS','MD','MT','ND','UT','VT']

    }

}





