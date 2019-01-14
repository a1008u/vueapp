const mkCkGroups = (tempMembers, selectedGroupNum) => {
  let ckGroups = [];
  let ckMembers = [];
  tempMembers.forEach(members => {
    members.forEach(member => {
      if (ckMembers.length === (selectedGroupNum -1)) {
        ckMembers.push(member.name);
        ckGroups.push(ckMembers);
        ckMembers = [];
      } else {
        ckMembers.push(member.name);
      }
    });
  });
  return ckGroups
}

const mkDabuleCkGroupList = (ckGroups, storeMembers) => {
  console.log(' --- mkDabuleCkGroupList --- ')
  let dabuleCkGroupList = [];
  let dabuleCkGroup = [];

  for (let members of ckGroups) {
    for (let group of storeMembers.group) {
      for (let member of group) {
        if (members.includes(member.name)) {
          group
            .filter(tempMember => tempMember.name !== member.name)
            .map(tempMember => dabuleCkGroup.push(tempMember.name))
        }
      }
    }
    dabuleCkGroupList.push(dabuleCkGroup);
    dabuleCkGroup = [];
  }
  return dabuleCkGroupList
}

const mkOutGroup = (ckGroups, dabuleCkGroupList) => {
  console.log(' --- mkOutGroup --- ')
  let outGroup = [];
  ckGroups.forEach((members, index) => {
    const outMember = members.filter(member => dabuleCkGroupList[index].includes(member))
    outGroup.push(outMember);
  });
  return outGroup;
}

const mkCkGroup = (group) => {
  console.log(' --- ck --- ')
  const ckGroups = [];
  group.forEach(glists => {
    glists.forEach( glist => {
      const tmpGroup = glist.map(member => member.name)
      ckGroups.push(tmpGroup);
    })
  });
  return ckGroups;
}

const mkViewGroup = (outGroup) => {
  let b = outGroup.length;// 26
  let cnt = 3;            // いくつずつに分割するか
  let newArr = [];        // 新しく作る配列

  for (let i = 0; i < Math.ceil(b / cnt); i++) {
    let j = i * cnt;
    let p = outGroup.slice(j, j + cnt); // i*cnt 番目から i*cnt+cnt 番目まで取得
    newArr.push(p);                    // 取得したものを newArr に追加
  }
  return newArr
}

const registerOut = (i, yearMonths, ckGroups) => {
  // チェック
  const dabuleCkGroupList = Group.mkDabuleCkGroupList(ckGroups, yearMonths[i]);
  // 該当箇所を抽出
  const outGroup = Group.mkOutGroup(ckGroups, dabuleCkGroupList);
  return Group.mkViewGroup(outGroup);
}

const Group = {
  mkCkGroup,
  mkCkGroups,
  mkDabuleCkGroupList,
  mkOutGroup,
  mkViewGroup,
  registerOut
};
export default Group;