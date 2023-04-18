# `kubernetes_token_request_v1`

Refer to the Terraform Registory for docs: [`kubernetes_token_request_v1`](https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1).

# `tokenRequestV1` Submodule <a name="`tokenRequestV1` Submodule" id="@cdktf/provider-kubernetes.tokenRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenRequestV1 <a name="TokenRequestV1" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1 kubernetes_token_request_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.token_request_v1.TokenRequestV1;

TokenRequestV1.Builder.create(Construct scope, java.lang.String id)
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
    .metadata(TokenRequestV1Metadata)
//  .id(java.lang.String)
//  .spec(TokenRequestV1Spec)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#id TokenRequestV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a></code> | spec block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#metadata TokenRequestV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#id TokenRequestV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#spec TokenRequestV1#spec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata"></a>

```java
public void putMetadata(TokenRequestV1Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putSpec"></a>

```java
public void putSpec(TokenRequestV1Spec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetId"></a>

```java
public void resetId()
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetSpec"></a>

```java
public void resetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.token_request_v1.TokenRequestV1;

TokenRequestV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.token_request_v1.TokenRequestV1;

TokenRequestV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.token_request_v1.TokenRequestV1;

TokenRequestV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference">TokenRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference">TokenRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.metadata"></a>

```java
public TokenRequestV1MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference">TokenRequestV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.spec"></a>

```java
public TokenRequestV1SpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference">TokenRequestV1SpecOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.metadataInput"></a>

```java
public TokenRequestV1Metadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.specInput"></a>

```java
public TokenRequestV1Spec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TokenRequestV1Config <a name="TokenRequestV1Config" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.token_request_v1.TokenRequestV1Config;

TokenRequestV1Config.builder()
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
    .metadata(TokenRequestV1Metadata)
//  .id(java.lang.String)
//  .spec(TokenRequestV1Spec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#id TokenRequestV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a></code> | spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.metadata"></a>

```java
public TokenRequestV1Metadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#metadata TokenRequestV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#id TokenRequestV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.spec"></a>

```java
public TokenRequestV1Spec getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#spec TokenRequestV1#spec}

---

### TokenRequestV1Metadata <a name="TokenRequestV1Metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.token_request_v1.TokenRequestV1Metadata;

TokenRequestV1Metadata.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the token request that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the token request. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the token request, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the token request must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the token request that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#annotations TokenRequestV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#generate_name TokenRequestV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the token request.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#labels TokenRequestV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the token request, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#name TokenRequestV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the token request must be unique.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#namespace TokenRequestV1#namespace}

---

### TokenRequestV1Spec <a name="TokenRequestV1Spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.token_request_v1.TokenRequestV1Spec;

TokenRequestV1Spec.builder()
//  .audiences(java.util.List<java.lang.String>)
//  .boundObjectRef(TokenRequestV1SpecBoundObjectRef)
//  .expirationSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | Audiences are the intendend audiences of the token. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.boundObjectRef">boundObjectRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a></code> | bound_object_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.expirationSeconds">expirationSeconds</a></code> | <code>java.lang.Number</code> | expiration_seconds is the requested duration of validity of the request. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

Audiences are the intendend audiences of the token.

A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#audiences TokenRequestV1#audiences}

---

##### `boundObjectRef`<sup>Optional</sup> <a name="boundObjectRef" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.boundObjectRef"></a>

```java
public TokenRequestV1SpecBoundObjectRef getBoundObjectRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a>

bound_object_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#bound_object_ref TokenRequestV1#bound_object_ref}

---

##### `expirationSeconds`<sup>Optional</sup> <a name="expirationSeconds" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.expirationSeconds"></a>

```java
public java.lang.Number getExpirationSeconds();
```

- *Type:* java.lang.Number

expiration_seconds is the requested duration of validity of the request.

The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response. The expiration can't be less than 10 minutes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#expiration_seconds TokenRequestV1#expiration_seconds}

---

### TokenRequestV1SpecBoundObjectRef <a name="TokenRequestV1SpecBoundObjectRef" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.token_request_v1.TokenRequestV1SpecBoundObjectRef;

TokenRequestV1SpecBoundObjectRef.builder()
//  .apiVersion(java.lang.String)
//  .kind(java.lang.String)
//  .name(java.lang.String)
//  .uid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | API version of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.kind">kind</a></code> | <code>java.lang.String</code> | Kind of the referent. Valid kinds are 'Pod' and 'Secret'. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.uid">uid</a></code> | <code>java.lang.String</code> | UID of the referent. |

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

API version of the referent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#api_version TokenRequestV1#api_version}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Kind of the referent. Valid kinds are 'Pod' and 'Secret'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#kind TokenRequestV1#kind}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#name TokenRequestV1#name}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

UID of the referent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/token_request_v1#uid TokenRequestV1#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### TokenRequestV1MetadataOutputReference <a name="TokenRequestV1MetadataOutputReference" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.token_request_v1.TokenRequestV1MetadataOutputReference;

new TokenRequestV1MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.internalValue"></a>

```java
public TokenRequestV1Metadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

---


### TokenRequestV1SpecBoundObjectRefOutputReference <a name="TokenRequestV1SpecBoundObjectRefOutputReference" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.token_request_v1.TokenRequestV1SpecBoundObjectRefOutputReference;

new TokenRequestV1SpecBoundObjectRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion">resetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetUid">resetUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiVersion` <a name="resetApiVersion" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion"></a>

```java
public void resetApiVersion()
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetKind"></a>

```java
public void resetKind()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetUid` <a name="resetUid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetUid"></a>

```java
public void resetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput">apiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput">uidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput"></a>

```java
public java.lang.String getApiVersionInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput"></a>

```java
public java.lang.String getUidInput();
```

- *Type:* java.lang.String

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue"></a>

```java
public TokenRequestV1SpecBoundObjectRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a>

---


### TokenRequestV1SpecOutputReference <a name="TokenRequestV1SpecOutputReference" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.token_request_v1.TokenRequestV1SpecOutputReference;

new TokenRequestV1SpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.putBoundObjectRef">putBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetBoundObjectRef">resetBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetExpirationSeconds">resetExpirationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBoundObjectRef` <a name="putBoundObjectRef" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.putBoundObjectRef"></a>

```java
public void putBoundObjectRef(TokenRequestV1SpecBoundObjectRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a>

---

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetAudiences"></a>

```java
public void resetAudiences()
```

##### `resetBoundObjectRef` <a name="resetBoundObjectRef" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetBoundObjectRef"></a>

```java
public void resetBoundObjectRef()
```

##### `resetExpirationSeconds` <a name="resetExpirationSeconds" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetExpirationSeconds"></a>

```java
public void resetExpirationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.boundObjectRef">boundObjectRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference">TokenRequestV1SpecBoundObjectRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.boundObjectRefInput">boundObjectRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.expirationSecondsInput">expirationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.expirationSeconds">expirationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boundObjectRef`<sup>Required</sup> <a name="boundObjectRef" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.boundObjectRef"></a>

```java
public TokenRequestV1SpecBoundObjectRefOutputReference getBoundObjectRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference">TokenRequestV1SpecBoundObjectRefOutputReference</a>

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundObjectRefInput`<sup>Optional</sup> <a name="boundObjectRefInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.boundObjectRefInput"></a>

```java
public TokenRequestV1SpecBoundObjectRef getBoundObjectRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a>

---

##### `expirationSecondsInput`<sup>Optional</sup> <a name="expirationSecondsInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.expirationSecondsInput"></a>

```java
public java.lang.Number getExpirationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `expirationSeconds`<sup>Required</sup> <a name="expirationSeconds" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.expirationSeconds"></a>

```java
public java.lang.Number getExpirationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.internalValue"></a>

```java
public TokenRequestV1Spec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

---



