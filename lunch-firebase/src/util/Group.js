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
  let dabuleCkGroupList = [];
  let dabuleCkGroup = [];

  console.log(ckGroups)
  console.log(storeMembers)

  for (let members of ckGroups) {
    for (let group of storeMembers.group) {
      for (let member of group) {
        if (members.includes(member.name)) {
          group.forEach(tempMember => {
            if (tempMember.name !== member.name) {
              dabuleCkGroup.push(tempMember.name);
            }
          });
        }
      }
    }
    dabuleCkGroupList.push(dabuleCkGroup);
    dabuleCkGroup = [];
  }
  return dabuleCkGroupList
}

const mkOutGroup = (ckGroups, dabuleCkGroupList) => {
  let outGroup = [];
  let outMember = [];
  ckGroups.forEach((members, index) => {
    members.forEach(member => {
      if (dabuleCkGroupList[index].includes(member)) {
        outMember.push(member);
      }
    });
    outGroup.push(outMember);
    outMember = [];
  });
  return outGroup;
}

const mkCkGroup = (group) => {
  let tmpGroup = [];
  const ckGroups = [];
  group.forEach(glists => {
    glists.forEach( glist => {
      glist.forEach(member => tmpGroup.push(member.name))
      ckGroups.push(tmpGroup);
      tmpGroup = [];
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