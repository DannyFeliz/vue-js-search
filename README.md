# Vue Js Search: client-side search library

> This package is a wrapper of the library: [https://github.com/bvaughn/js-search](js-search)

### Props

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Descripcion</th>
            <th>Default</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody>
    	<tr>
          <td>primaryKey</td>
          <td>String</td>
          <td>Is a uuid used to identify each object, if no key is specied we add `__primaryKey` as primary key
          <td>__primaryKey</td>
          <td>No</td>
        </tr>
        <tr>
            <td>data</td>
            <td>Array</td>
            <td>The array of object used to perform the search</td>
            <td></td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>columns</td>
            <td>Array</td>
            <td>All fields to search for. (Note: if you want to search for a deep key you should use a `.` to specify where to find the key. e.g ["user.location.city"])</td>
            <td>[]</td>
            <td>Yes</td>
        </tr>
           <tr>
            <td>delay</td>
            <td>String | Number</td>
            <td>Time in milliseconds used to delay the search, this is good if you have a lot of data and want to optimize the search</td> 
            <td>0</td>
            <td>No</td>
        </tr>
        <tr>
            <td>id</td>
            <td>String</td>
            <td>Sets the value of the id attribute of a search field</td>
            <td></td>
            <td>No</td>
        </tr>
        <tr>
            <td>classes</td>
            <td>String</td>
            <td>Sets the value of the class attribute of a search field</td>
            <td></td>
            <td>No</td>
        </tr>
		<tr>
            <td>name</td>
            <td>String</td>
            <td>Sets the value of the name attribute of a search field</td>
            <td></td>
            <td>No</td>
        </tr>
        <tr>
            <td>placeholder</td>
            <td>String</td>
            <td>Sets the value of the placeholder attribute of a search field</td>
            <td></td>
            <td>No</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>String</td>
            <td>Sets whether a search field is disabled, or not</td>
            <td></td>
            <td>No</td>
        </tr>
        <tr>
            <td>readonly</td>
            <td>String</td>
            <td>Sets whether the search field is read-only, or not</td>
            <td></td>
            <td>No</td>
        </tr>
        <tr>
            <td>autocomplete</td>
            <td>String</td>
            <td>Sets the value of the autocomplete attribute of a search field</td>
            <td></td>
            <td>No</td>
        </tr>
        <tr>
            <td>autofocus</td>
            <td>String</td>
            <td>Sets whether a search field should automatically get focus when the page loads (Note: to make this work you the search field should be within a `form` tag)</td>
            <td></td>
            <td>No</td>
        </tr>
        <tr>
            <td>maxLength</td>
            <td>String</td>
            <td>Sets the value of the maxlength attribute of a search field</td>
            <td></td>
            <td>No</td>
        </tr>
        <tr>
            <td>pattern</td>
            <td>String</td>
            <td>Sets the value of the pattern attribute of a search field</td>
            <td></td>
            <td>No</td>
        </tr>
        <tr>
            <td>size</td>
            <td>String</td>
            <td>Sets the value of the size attribute of the search field</td>
            <td></td>
            <td>No</td>
        </tr>
    </tbody>
</table>
