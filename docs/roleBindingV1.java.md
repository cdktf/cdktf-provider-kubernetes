# `kubernetes_role_binding_v1`

Refer to the Terraform Registory for docs: [`kubernetes_role_binding_v1`](https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1).

# `roleBindingV1` Submodule <a name="`roleBindingV1` Submodule" id="@cdktf/provider-kubernetes.roleBindingV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RoleBindingV1 <a name="RoleBindingV1" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1 kubernetes_role_binding_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.role_binding_v1.RoleBindingV1;

RoleBindingV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(RoleBindingV1Metadata)
    .roleRef(RoleBindingV1RoleRef)
    .subject(IResolvable)
    .subject(java.util.List<RoleBindingV1Subject>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata">RoleBindingV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.roleRef">roleRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef">RoleBindingV1RoleRef</a></code> | role_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.subject">subject</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject">RoleBindingV1Subject</a>></code> | subject block. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#id RoleBindingV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata">RoleBindingV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#metadata RoleBindingV1#metadata}

---

##### `roleRef`<sup>Required</sup> <a name="roleRef" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.roleRef"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef">RoleBindingV1RoleRef</a>

role_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#role_ref RoleBindingV1#role_ref}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.subject"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject">RoleBindingV1Subject</a>>

subject block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#subject RoleBindingV1#subject}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#id RoleBindingV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.putRoleRef">putRoleRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.putMetadata"></a>

```java
public void putMetadata(RoleBindingV1Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata">RoleBindingV1Metadata</a>

---

##### `putRoleRef` <a name="putRoleRef" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.putRoleRef"></a>

```java
public void putRoleRef(RoleBindingV1RoleRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.putRoleRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef">RoleBindingV1RoleRef</a>

---

##### `putSubject` <a name="putSubject" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.putSubject"></a>

```java
public void putSubject(IResolvable OR java.util.List<RoleBindingV1Subject> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.putSubject.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject">RoleBindingV1Subject</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.role_binding_v1.RoleBindingV1;

RoleBindingV1.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.role_binding_v1.RoleBindingV1;

RoleBindingV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.role_binding_v1.RoleBindingV1;

RoleBindingV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference">RoleBindingV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.roleRef">roleRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference">RoleBindingV1RoleRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList">RoleBindingV1SubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata">RoleBindingV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.roleRefInput">roleRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef">RoleBindingV1RoleRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.subjectInput">subjectInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject">RoleBindingV1Subject</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.metadata"></a>

```java
public RoleBindingV1MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference">RoleBindingV1MetadataOutputReference</a>

---

##### `roleRef`<sup>Required</sup> <a name="roleRef" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.roleRef"></a>

```java
public RoleBindingV1RoleRefOutputReference getRoleRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference">RoleBindingV1RoleRefOutputReference</a>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.subject"></a>

```java
public RoleBindingV1SubjectList getSubject();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList">RoleBindingV1SubjectList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.metadataInput"></a>

```java
public RoleBindingV1Metadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata">RoleBindingV1Metadata</a>

---

##### `roleRefInput`<sup>Optional</sup> <a name="roleRefInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.roleRefInput"></a>

```java
public RoleBindingV1RoleRef getRoleRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef">RoleBindingV1RoleRef</a>

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.subjectInput"></a>

```java
public java.lang.Object getSubjectInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject">RoleBindingV1Subject</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RoleBindingV1Config <a name="RoleBindingV1Config" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.role_binding_v1.RoleBindingV1Config;

RoleBindingV1Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(RoleBindingV1Metadata)
    .roleRef(RoleBindingV1RoleRef)
    .subject(IResolvable)
    .subject(java.util.List<RoleBindingV1Subject>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata">RoleBindingV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.roleRef">roleRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef">RoleBindingV1RoleRef</a></code> | role_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.subject">subject</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject">RoleBindingV1Subject</a>></code> | subject block. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#id RoleBindingV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.metadata"></a>

```java
public RoleBindingV1Metadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata">RoleBindingV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#metadata RoleBindingV1#metadata}

---

##### `roleRef`<sup>Required</sup> <a name="roleRef" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.roleRef"></a>

```java
public RoleBindingV1RoleRef getRoleRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef">RoleBindingV1RoleRef</a>

role_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#role_ref RoleBindingV1#role_ref}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.subject"></a>

```java
public java.lang.Object getSubject();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject">RoleBindingV1Subject</a>>

subject block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#subject RoleBindingV1#subject}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#id RoleBindingV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### RoleBindingV1Metadata <a name="RoleBindingV1Metadata" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.role_binding_v1.RoleBindingV1Metadata;

RoleBindingV1Metadata.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .generateName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the roleBinding that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the roleBinding. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the roleBinding, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the roleBinding must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the roleBinding that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#annotations RoleBindingV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#generate_name RoleBindingV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the roleBinding.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#labels RoleBindingV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the roleBinding, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#name RoleBindingV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the roleBinding must be unique.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#namespace RoleBindingV1#namespace}

---

### RoleBindingV1RoleRef <a name="RoleBindingV1RoleRef" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.role_binding_v1.RoleBindingV1RoleRef;

RoleBindingV1RoleRef.builder()
    .apiGroup(java.lang.String)
    .kind(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef.property.apiGroup">apiGroup</a></code> | <code>java.lang.String</code> | The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef.property.kind">kind</a></code> | <code>java.lang.String</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef.property.name">name</a></code> | <code>java.lang.String</code> | The name of the User to bind to. |

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef.property.apiGroup"></a>

```java
public java.lang.String getApiGroup();
```

- *Type:* java.lang.String

The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#api_group RoleBindingV1#api_group}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

The kind of resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#kind RoleBindingV1#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the User to bind to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#name RoleBindingV1#name}

---

### RoleBindingV1Subject <a name="RoleBindingV1Subject" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.role_binding_v1.RoleBindingV1Subject;

RoleBindingV1Subject.builder()
    .kind(java.lang.String)
    .name(java.lang.String)
//  .apiGroup(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject.property.kind">kind</a></code> | <code>java.lang.String</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject.property.name">name</a></code> | <code>java.lang.String</code> | The name of the resource to bind to. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject.property.apiGroup">apiGroup</a></code> | <code>java.lang.String</code> | The API group of the subject resource. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The Namespace of the subject resource. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

The kind of resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#kind RoleBindingV1#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the resource to bind to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#name RoleBindingV1#name}

---

##### `apiGroup`<sup>Optional</sup> <a name="apiGroup" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject.property.apiGroup"></a>

```java
public java.lang.String getApiGroup();
```

- *Type:* java.lang.String

The API group of the subject resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#api_group RoleBindingV1#api_group}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The Namespace of the subject resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_binding_v1#namespace RoleBindingV1#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### RoleBindingV1MetadataOutputReference <a name="RoleBindingV1MetadataOutputReference" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.role_binding_v1.RoleBindingV1MetadataOutputReference;

new RoleBindingV1MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata">RoleBindingV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1MetadataOutputReference.property.internalValue"></a>

```java
public RoleBindingV1Metadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Metadata">RoleBindingV1Metadata</a>

---


### RoleBindingV1RoleRefOutputReference <a name="RoleBindingV1RoleRefOutputReference" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.role_binding_v1.RoleBindingV1RoleRefOutputReference;

new RoleBindingV1RoleRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.apiGroupInput">apiGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.apiGroup">apiGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef">RoleBindingV1RoleRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiGroupInput`<sup>Optional</sup> <a name="apiGroupInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.apiGroupInput"></a>

```java
public java.lang.String getApiGroupInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.apiGroup"></a>

```java
public java.lang.String getApiGroup();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRefOutputReference.property.internalValue"></a>

```java
public RoleBindingV1RoleRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1RoleRef">RoleBindingV1RoleRef</a>

---


### RoleBindingV1SubjectList <a name="RoleBindingV1SubjectList" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.role_binding_v1.RoleBindingV1SubjectList;

new RoleBindingV1SubjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.get"></a>

```java
public RoleBindingV1SubjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject">RoleBindingV1Subject</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject">RoleBindingV1Subject</a>>

---


### RoleBindingV1SubjectOutputReference <a name="RoleBindingV1SubjectOutputReference" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.role_binding_v1.RoleBindingV1SubjectOutputReference;

new RoleBindingV1SubjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.resetApiGroup">resetApiGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiGroup` <a name="resetApiGroup" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.resetApiGroup"></a>

```java
public void resetApiGroup()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.apiGroupInput">apiGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.apiGroup">apiGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject">RoleBindingV1Subject</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiGroupInput`<sup>Optional</sup> <a name="apiGroupInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.apiGroupInput"></a>

```java
public java.lang.String getApiGroupInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `apiGroup`<sup>Required</sup> <a name="apiGroup" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.apiGroup"></a>

```java
public java.lang.String getApiGroup();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1SubjectOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.roleBindingV1.RoleBindingV1Subject">RoleBindingV1Subject</a> OR com.hashicorp.cdktf.IResolvable

---



