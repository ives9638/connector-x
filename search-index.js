var searchIndex = JSON.parse('{\
"connectorx":{"doc":"","t":[0,0,0,14,14,0,0,0,0,13,4,13,11,11,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,8,18,8,8,16,16,16,16,16,16,10,10,11,10,10,10,10,11,13,13,4,13,13,13,13,4,6,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,11,11,11,11,11,11,11,11,11,11,11,11,11,18,16,16,16,16,16,16,8,8,8,8,16,16,16,10,10,10,10,11,10,10,10,10,10,10,10,16,16,16,8,8,8,16,16,16,8,8,8,8,10,11,10,11,10,10,5,10,10,10,11],"n":["data_order","destinations","errors","impl_transport","impl_typesystem","prelude","sources","transports","typesystem","ColumnMajor","DataOrder","RowMajor","borrow","borrow_mut","clone","clone_into","coordinate","deref","deref_mut","drop","eq","fmt","from","init","into","to_owned","try_from","try_into","type_id","Consume","DATA_ORDERS","Destination","DestinationPartition","Error","Error","Error","Partition","TypeSystem","TypeSystem","allocate","consume","finalize","ncols","nrows","partition","schema","write","CannotProduce","CannotResolveDataOrder","ConnectorXError","Context","NoContext","NoConversionRule","Other","ProduceContext","Result","SQLParserError","SqlQueryNotSupported","TypeCheckFailed","UnsupportedDataOrder","borrow","borrow","borrow_mut","borrow_mut","cannot_produce","deref","deref","deref_mut","deref_mut","drop","drop","fmt","fmt","fmt","fmt","from","from","from","from","from","init","init","into","into","source","to_string","to_string","try_from","try_from","try_into","try_into","type_id","type_id","Dispatcher","borrow","borrow_mut","deref","deref_mut","drop","from","init","into","new","run","try_from","try_into","type_id","DATA_ORDERS","Error","Error","Error","Error","Parser","Partition","PartitionParser","Produce","Source","SourcePartition","TypeSystem","TypeSystem","TypeSystem","fetch_metadata","names","ncols","nrows","parse","parser","partition","prepare","produce","schema","set_data_order","set_queries","D","Error","Function","ParameterizedFunc","ParameterizedOn","Realize","S","TSD","TSS","Transport","TypeAssoc","TypeConversion","TypeSystem","check","check","convert","convert_type","convert_typesystem","parameterize","process","process","processor","realize","realize"],"q":["connectorx","","","","","","","","","connectorx::data_order","","","","","","","","","","","","","","","","","","","","connectorx::destinations","","","","","","","","","","","","","","","","","","connectorx::errors","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","connectorx::prelude","","","","","","","","","","","","","","connectorx::sources","","","","","","","","","","","","","","","","","","","","","","","","","","connectorx::typesystem","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","","A macro to help define Transport.","A macro to implement <code>TypeAssoc</code> and <code>Realize</code> which saves …","","","","","","","","","","","","Given the supported data order from source and …","","","","","","","","","","","","","A type implemented <code>Consume<T></code> means that it can consume a …","","A <code>Destination</code> is associated with a <code>TypeSystem</code> and a …","<code>PartitionDestination</code> writes values to its own region. …","","","","","","","Construct the <code>Destination</code>. This allocates the memory …","","Final clean ups","Number of rows this <code>PartitionDestination</code> controls.","Number of rows this <code>PartitionDestination</code> controls.","Create a bunch of partition destinations, with each write …","Return the schema of the destination.","Write a value of type T to the location (row, col). If T …","","","Errors that can be raised from this library.","","","","Any other errors that are too trivial to be put here …","","","","","The required type does not same as the schema defined.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A dispatcher owns a <code>SourceBuilder</code> <code>SB</code> and a vector of …","","","","","","","","","Create a new dispatcher by providing a source builder, …","Run the dispatcher by specifying the src, the dispatcher …","","","","Supported data orders, ordering by preference.","","","","","","","","A type implemented <code>Produce<T></code> means that it can produce a …","","In general, a <code>DataSource</code> abstracts the data source as a …","The type system this <code>Source</code> associated with.","","","","","Number of cols this <code>DataSource</code> got.","Number of rows this <code>DataSource</code> got. Sometimes it is not …","Read a value <code>T</code> by calling <code>Produce<T>::produce</code>. Usually …","","","Run the query and put the result into Self.","","","","","","","","A ParameterizedFunc refers to a function that is …","<code>ParameterizedOn</code> indicates a parameterized function <code>Self</code> …","Realize means that a TypeSystem can realize a …","","","","Transport defines how to produce a value, do type …","Associate a static type to a TypeSystem","","<code>TypeSystem</code> describes all the types a source or …","","Check whether T is the same type as defined by self.","","convert_type convert the type T1 associated with the …","convert_typesystem convert the source type system TSS to …","","","<code>process</code> will ask source to produce a value with type T1, …","","realize a parameterized function with the type that self …",""],"i":[0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,2,0,0,2,3,4,2,2,3,2,4,3,3,3,2,2,3,5,5,0,6,6,5,5,0,0,5,5,5,5,5,6,5,6,5,5,6,5,6,5,6,5,5,6,6,5,5,5,6,6,5,6,5,6,5,5,6,5,6,5,6,5,6,0,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,9,10,11,9,8,0,0,0,0,8,9,10,8,8,9,9,10,9,8,9,11,8,8,8,12,12,13,0,0,0,12,12,12,0,0,0,0,14,15,16,12,12,17,0,12,12,18,13],"f":[null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[],["dataorder",4]],[[]],[[],[["dataorder",4],["result",4],["connectorxerror",4]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["dataorder",4]],["bool",15]],[[["formatter",3]],["result",6]],[[]],[[],["usize",15]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,[[["dataorder",4],["usize",15]],["result",4]],[[],["result",4]],[[],["result",4]],[[],["usize",15]],[[],["usize",15]],[[],[["result",4],["vec",3]]],[[]],[[],["result",4]],null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[["option",4],["string",3]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[["error",3]]],[[["parsererror",4]]],[[]],[[["option",4],["string",3]]],[[],["usize",15]],[[],["usize",15]],[[]],[[]],[[],[["option",4],["error",8]]],[[],["string",3]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],null,[[]],[[]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[],["usize",15]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[],["result",4]],[[],[["vec",3],["string",3]]],[[],["usize",15]],[[],["usize",15]],[[],["result",4]],[[],["result",4]],[[],[["result",4],["vec",3]]],[[],["result",4]],[[],["result",4]],[[],["vec",3]],[[["dataorder",4]],["result",4]],[[]],null,null,null,null,null,null,null,null,null,null,null,null,null,[[],["cxresult",6]],[[],["cxresult",6]],[[]],[[]],[[],["cxresult",6]],[[]],[[],["result",4]],[[],["result",4]],[[],["cxresult",6]],[[],["cxresult",6]],[[]]],"p":[[4,"DataOrder"],[8,"Destination"],[8,"DestinationPartition"],[8,"Consume"],[4,"ConnectorXError"],[4,"ProduceContext"],[3,"Dispatcher"],[8,"Source"],[8,"SourcePartition"],[8,"PartitionParser"],[8,"Produce"],[8,"Transport"],[8,"ParameterizedFunc"],[8,"TypeAssoc"],[8,"TypeSystem"],[8,"TypeConversion"],[8,"ParameterizedOn"],[8,"Realize"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};