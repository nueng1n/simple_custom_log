# simple_custom_log

 In this implement have options :
 ```
 { 
  showLogs: Boolean,
  except_files: []  array of string ,
  pretty_object: Boolean 
 }
```

example set options:
```
if (process.env['SITE'] == "PRD") {
    objectLog.setShowLogs({ showLogs: false, except_files: ['app.js', 'file_a.js'], pretty_object: false })
} else {
    objectLog.setShowLogs({ showLogs: true })
}
```

this image show when doesn't set any options show in all files use logs.
![image](https://user-images.githubusercontent.com/115057360/215397489-f4356653-14c3-4f53-9a1b-96c525b8fb0a.png)
<br/>

this image show when set options.<br/>
![image](https://user-images.githubusercontent.com/115057360/215397570-6c4ab529-f95b-4517-9604-9a670f7365a3.png)
