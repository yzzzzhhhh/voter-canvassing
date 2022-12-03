# Voter Canvassing Project Requirements

Please read these requirements closely. I recommend that you...
1.  create an issue on your fork of the project on GitHub (you may have to [enable the issues feature](https://stackoverflow.com/a/16406283/123776) on your fork first),
2.  copy the requirements listed below into that issue, and
3.  check off the items as you satify them.

The items listed under **Your Repository** and **Core Interface Elements** are actual requirements, whereas the items listed as **Stretch** are to be undertaken if you want to challenge yourself, and do not have to be completed in any order (e.g., feel free to do stretch 3, but not 1 or 2)!

## Your Repository

* [ ] **Your repository should have a README.md file that describes the team that worked on the project, how you approached collaboration (i.e., how the work was divided up), and any stretch goals that are attempted/implemented.** Markdown is a pretty simple and intuitive syntax for writing project documentation. See GitHub's [basic markdown reference](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax). You can also [preview a markdown file](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview) as you write it in VS Code.

## Core Interface Elements

### Layout

* [ ] Unless otherwise specified, all features should be useable on both small (mobile) and large (laptop/desktop) screens. **Your HTML document should have appropriate `meta` tag(s) to make this possible.**

### Loading voter files...

* [*] There should be an `input` element on the page where you can enter a voter file number. **Save the `input` DOM element in a variable named `voterFileInput` attached to the global `window` object.** In other words:
  
  ```js
  window.voterFileInput = ...;
  ```

* [*] There should be a `button` that will load the voter file number given in the `voterFileInput` when clicked. **Save the `button` DOM element in a variable named `voterFileLoadButton` attached to the global `window` object.**

### Listing and mapping voters...

* [*] Your page should have an element that shows the voters (and their addresses) from a file. Note that the element _does not_ need to be a `ul`, `ol`, or any other HTML list element. Even though the element itself may not use a list tag like `ul` or `ol`, it will still function as a list and I'll still refer to it as one. **The list's DOM element should be available on the global `window` object as a variable named `voterList`.**

* [*] Your page should have a Leaflet map to show voter locations. **The Leaflet map object should be available on the global `window` object as a variable named `voterMap`.**

* When you enter a file number, the voter information in that CSV file should be loaded onto the `voterMap` and into the `voterList`.当您输入文件编号时，该 CSV 文件中的选民信息应加载到 `voterMap` 和 `voterList` 中。
  * [ ] **Wrap each voter's name in an element (for example a `span`) with the class `voter-name`. Wrap addresses in an element with the class `voter-address`** You may choose to list each voter individually or grouped by address, which I would recommend. Either way, each voter's basic information (at least their name and street address) should be shown in the `voterList`.**将每个选民的名字包装在一个元素（例如一个 span ）中，类为 voter-name 。 用 `voter-address` 类将地址包装在一个元素中** 您可以选择单独列出每个选民或按地址分组，我建议这样做。 无论哪种方式，每个选民的基本信息（至少他们的姓名和街道地址）都应该显示在 `voterList` 中。
  * [ ] **Represent the voters in the file with map markers.** You may choose to have one map marker to represent each voter, one marker to represent each address, or one marker to represent each _building_ (for example, two apartments that share the same street address are in the same building). I would generally recommend showing a marker for each building, as otherwise markers for different apartments or voters in the same building will be overlapping.**用地图标记代表文件中的选民。**您可以选择用一个地图标记代表每位选民，用一个标记代表每个地址，或者用一个标记代表每个_建筑物_（例如，两间公寓 具有相同街道地址的在同一栋楼内）。 我通常会建议为每栋建筑物显示一个标记，否则同一建筑物中不同公寓或选民的标记将会重叠。

* [ ] When you click on a map marker, the marker should be highlighted in some way to show that it is selected. **Change the marker styles of a selected marker if it is a vector marker (e.g. `L.circleMarker`), or change the icon if it is a normal image marker (e.g. `L.marker`).**
当您单击地图标记时，该标记应以某种方式突出显示以表明它已被选中。 **如果所选标记是矢量标记（例如 `L.circleMarker`），则更改其标记样式；如果它是普通图像标记（例如 `L.marker`），则更改图标。**

* [ ] When you click on a map marker, the corresponding item(s) in the `voterList` should also be highlighted. **Add a class named `selected` to the appropriate element(s) within the `voterList`.** Use that `selected` class to apply different visual styles to the element(s).当您点击地图标记时，“voterList”中的相应项目也应该突出显示。 **将名为 `selected` 的类添加到 `voterList` 中的适当元素。** 使用该 `selected` 类将不同的视觉样式应用于元素。

### Displaying and editing voter details...

> _Note that if you decide to implement a workflow that doesn't precisely fit into the structure below, that's ok! Just talk with me about what the workflow is, because we may need to modify the project tests._

* [ ] When you click on a voter (or an address) in the `voterList`, a panel should be shown that contains details about the voter (or about each voter at the address). This panel could be represented in HTML with a `div`, `form`, `section`, or any of a number of other elements. **Give the voter information panel(s) a class of `voter-details`.**当您点击 `voterList` 中的选民（或地址）时，应显示一个面板，其中包含有关该选民（或该地址的每个选民）的详细信息。 这个面板可以在 HTML 中用“div”、“form”、“section”或许多其他元素中的任何一个来表示。 **给选民信息面板一类“选民详细信息”。**

* [ ] There should be _at least_ three separate input elements available for collecting facts about each voter (refer to the [product requirements document](PRD.md) that we created in class to remind yourself what kind of information should be collected). **Include fields for collecting voter information on each `voter-details` panel.**应该有_至少_三个单独的输入元素可用于收集有关每个选民的事实（请参阅我们在课堂上创建的 [产品需求文档](PRD.md)，以提醒您自己应该收集什么样的信息）。 **包括用于在每个“选民详细信息”面板上收集选民信息的字段。**

* [ ] There should be a button on the voter details panel that allows a user to save the information entered when it is clicked. **Include such a button and give it a class `voter-details-save-btn`.**选民详细信息面板上应该有一个按钮，允许用户在单击时保存输入的信息。 **包括这样一个按钮并给它一个类 `voter-details-save-btn`。**

* [ ] Voter details should be persisted to local memory. **When voter details are closed, the page is reloaded, and the voter information is loaded again, the value in each of the inputs in the `voter-details` panel should be recalled.**选民详细信息应保存在本地内存中。 **当关闭选民详细信息、重新加载页面并再次加载选民信息时，应重新调用 `voter-details` 面板中每个输入的值。**

## Stretch 1: Store Voter Details in the Cloud

* In addition to saving data locally on a single browser, make it so that voter data will be recalled regardless of the device you're using.

## Stretch 2: User Feedback

* Use a toast or some other type of notification method to let the user know that their data has been successfully saved.
* Give the user gamified feedback such as toasts or alerts when they're a certain amount of the way through the voter file.

## Stretch 3: High-level Voter File Stats

* Include a view (either on the same HTML page or a different one) where you can display high-level summary charts and info about a voter file, such as:
  * the proportion of each political party represented in the file,
  * the number/proportion of doors you've already knocked on, or
  * the number/proportion of people you've already talked to from the file.

## Stretch 4: Voting Record

* Include a voter's voting record information in the voter details, ordered by their participation in elections from most recent to least recent.

## Stretch 5: Geolocation

* Show the closest voters that the user hasn't yet visited at the top of the address list. This way the user should always be able to simple look at the next voter/address in the list.

  > Note: this can be done using (1) the [geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API), (2) a library like [turf.js](https://turfjs.org/), and (3) JavaScript's [`Array.sort` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) which can admittedly be pretty weird at first.
