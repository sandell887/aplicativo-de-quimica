login ( );  {
    isso . fireauth . auth . signInWithEmailAndPassword ( este . email ,  esta . senha )
      . então ( res  =>  {
        if  ( res . user )  {
          console . log ( res . usuário ) ;
          isso . roteador . navegar ( [ '/ home' ] ) ;
        }
      } )
      . captura ( erro  =>  {
        console . log ( `falha no login $ { err } ` ) ;
        isso . error  =  err . mensagem ;
      } ) ;
  }
