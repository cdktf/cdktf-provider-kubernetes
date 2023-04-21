# `kubernetes_mutating_webhook_configuration`

Refer to the Terraform Registory for docs: [`kubernetes_mutating_webhook_configuration`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration).

# `mutatingWebhookConfiguration` Submodule <a name="`mutatingWebhookConfiguration` Submodule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MutatingWebhookConfiguration <a name="MutatingWebhookConfiguration" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration kubernetes_mutating_webhook_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfiguration;

MutatingWebhookConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(MutatingWebhookConfigurationMetadata)
    .webhook(IResolvable)
    .webhook(java.util.List<MutatingWebhookConfigurationWebhook>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.webhook">webhook</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>></code> | webhook block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#id MutatingWebhookConfiguration#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#metadata MutatingWebhookConfiguration#metadata}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.webhook"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>>

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#webhook MutatingWebhookConfiguration#webhook}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#id MutatingWebhookConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putWebhook">putWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putMetadata"></a>

```java
public void putMetadata(MutatingWebhookConfigurationMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

---

##### `putWebhook` <a name="putWebhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putWebhook"></a>

```java
public void putWebhook(IResolvable OR java.util.List<MutatingWebhookConfigurationWebhook> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putWebhook.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfiguration;

MutatingWebhookConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfiguration;

MutatingWebhookConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfiguration;

MutatingWebhookConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference">MutatingWebhookConfigurationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList">MutatingWebhookConfigurationWebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.webhookInput">webhookInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.metadata"></a>

```java
public MutatingWebhookConfigurationMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference">MutatingWebhookConfigurationMetadataOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.webhook"></a>

```java
public MutatingWebhookConfigurationWebhookList getWebhook();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList">MutatingWebhookConfigurationWebhookList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.metadataInput"></a>

```java
public MutatingWebhookConfigurationMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.webhookInput"></a>

```java
public java.lang.Object getWebhookInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MutatingWebhookConfigurationConfig <a name="MutatingWebhookConfigurationConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationConfig;

MutatingWebhookConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(MutatingWebhookConfigurationMetadata)
    .webhook(IResolvable)
    .webhook(java.util.List<MutatingWebhookConfigurationWebhook>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.webhook">webhook</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>></code> | webhook block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#id MutatingWebhookConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.metadata"></a>

```java
public MutatingWebhookConfigurationMetadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#metadata MutatingWebhookConfiguration#metadata}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.webhook"></a>

```java
public java.lang.Object getWebhook();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>>

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#webhook MutatingWebhookConfiguration#webhook}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#id MutatingWebhookConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MutatingWebhookConfigurationMetadata <a name="MutatingWebhookConfigurationMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationMetadata;

MutatingWebhookConfigurationMetadata.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .generateName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#annotations MutatingWebhookConfiguration#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#generate_name MutatingWebhookConfiguration#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#labels MutatingWebhookConfiguration#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#name MutatingWebhookConfiguration#name}

---

### MutatingWebhookConfigurationWebhook <a name="MutatingWebhookConfigurationWebhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhook;

MutatingWebhookConfigurationWebhook.builder()
    .clientConfig(MutatingWebhookConfigurationWebhookClientConfig)
    .name(java.lang.String)
//  .admissionReviewVersions(java.util.List<java.lang.String>)
//  .failurePolicy(java.lang.String)
//  .matchPolicy(java.lang.String)
//  .namespaceSelector(MutatingWebhookConfigurationWebhookNamespaceSelector)
//  .objectSelector(MutatingWebhookConfigurationWebhookObjectSelector)
//  .reinvocationPolicy(java.lang.String)
//  .rule(IResolvable)
//  .rule(java.util.List<MutatingWebhookConfigurationWebhookRule>)
//  .sideEffects(java.lang.String)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a></code> | client_config block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.name">name</a></code> | <code>java.lang.String</code> | The name of the admission webhook. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.admissionReviewVersions">admissionReviewVersions</a></code> | <code>java.util.List<java.lang.String></code> | AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.failurePolicy">failurePolicy</a></code> | <code>java.lang.String</code> | FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.matchPolicy">matchPolicy</a></code> | <code>java.lang.String</code> | matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent". |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.objectSelector">objectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a></code> | object_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.reinvocationPolicy">reinvocationPolicy</a></code> | <code>java.lang.String</code> | reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.sideEffects">sideEffects</a></code> | <code>java.lang.String</code> | SideEffects states whether this webhook has side effects. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | TimeoutSeconds specifies the timeout for this webhook. |

---

##### `clientConfig`<sup>Required</sup> <a name="clientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.clientConfig"></a>

```java
public MutatingWebhookConfigurationWebhookClientConfig getClientConfig();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a>

client_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#client_config MutatingWebhookConfiguration#client_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the admission webhook.

Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#name MutatingWebhookConfiguration#name}

---

##### `admissionReviewVersions`<sup>Optional</sup> <a name="admissionReviewVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.admissionReviewVersions"></a>

```java
public java.util.List<java.lang.String> getAdmissionReviewVersions();
```

- *Type:* java.util.List<java.lang.String>

AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects.

API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#admission_review_versions MutatingWebhookConfiguration#admission_review_versions}

---

##### `failurePolicy`<sup>Optional</sup> <a name="failurePolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.failurePolicy"></a>

```java
public java.lang.String getFailurePolicy();
```

- *Type:* java.lang.String

FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail.

Defaults to Fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#failure_policy MutatingWebhookConfiguration#failure_policy}

---

##### `matchPolicy`<sup>Optional</sup> <a name="matchPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.matchPolicy"></a>

```java
public java.lang.String getMatchPolicy();
```

- *Type:* java.lang.String

matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

* Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
* Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#match_policy MutatingWebhookConfiguration#match_policy}

---

##### `namespaceSelector`<sup>Optional</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.namespaceSelector"></a>

```java
public MutatingWebhookConfigurationWebhookNamespaceSelector getNamespaceSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#namespace_selector MutatingWebhookConfiguration#namespace_selector}

---

##### `objectSelector`<sup>Optional</sup> <a name="objectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.objectSelector"></a>

```java
public MutatingWebhookConfigurationWebhookObjectSelector getObjectSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a>

object_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#object_selector MutatingWebhookConfiguration#object_selector}

---

##### `reinvocationPolicy`<sup>Optional</sup> <a name="reinvocationPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.reinvocationPolicy"></a>

```java
public java.lang.String getReinvocationPolicy();
```

- *Type:* java.lang.String

reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation.

Allowed values are "Never" and "IfNeeded".

Never: the webhook will not be called more than once in a single admission evaluation.

IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.

Defaults to "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#reinvocation_policy MutatingWebhookConfiguration#reinvocation_policy}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#rule MutatingWebhookConfiguration#rule}

---

##### `sideEffects`<sup>Optional</sup> <a name="sideEffects" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.sideEffects"></a>

```java
public java.lang.String getSideEffects();
```

- *Type:* java.lang.String

SideEffects states whether this webhook has side effects.

Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#side_effects MutatingWebhookConfiguration#side_effects}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

TimeoutSeconds specifies the timeout for this webhook.

After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#timeout_seconds MutatingWebhookConfiguration#timeout_seconds}

---

### MutatingWebhookConfigurationWebhookClientConfig <a name="MutatingWebhookConfigurationWebhookClientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookClientConfig;

MutatingWebhookConfigurationWebhookClientConfig.builder()
//  .caBundle(java.lang.String)
//  .service(MutatingWebhookConfigurationWebhookClientConfigService)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.caBundle">caBundle</a></code> | <code>java.lang.String</code> | `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a></code> | service block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.url">url</a></code> | <code>java.lang.String</code> | `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). |

---

##### `caBundle`<sup>Optional</sup> <a name="caBundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.caBundle"></a>

```java
public java.lang.String getCaBundle();
```

- *Type:* java.lang.String

`caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate.

If unspecified, system trust roots on the apiserver are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#ca_bundle MutatingWebhookConfiguration#ca_bundle}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.service"></a>

```java
public MutatingWebhookConfigurationWebhookClientConfigService getService();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#service MutatingWebhookConfiguration#service}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

`url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`).

Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#url MutatingWebhookConfiguration#url}

---

### MutatingWebhookConfigurationWebhookClientConfigService <a name="MutatingWebhookConfigurationWebhookClientConfigService" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookClientConfigService;

MutatingWebhookConfigurationWebhookClientConfigService.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.name">name</a></code> | <code>java.lang.String</code> | `name` is the name of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.namespace">namespace</a></code> | <code>java.lang.String</code> | `namespace` is the namespace of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.path">path</a></code> | <code>java.lang.String</code> | `path` is an optional URL path which will be sent in any request to this service. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.port">port</a></code> | <code>java.lang.Number</code> | If specified, the port on the service that hosting webhook. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

`name` is the name of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#name MutatingWebhookConfiguration#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

`namespace` is the namespace of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#namespace MutatingWebhookConfiguration#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

`path` is an optional URL path which will be sent in any request to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#path MutatingWebhookConfiguration#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

If specified, the port on the service that hosting webhook.

Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#port MutatingWebhookConfiguration#port}

---

### MutatingWebhookConfigurationWebhookNamespaceSelector <a name="MutatingWebhookConfigurationWebhookNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookNamespaceSelector;

MutatingWebhookConfigurationWebhookNamespaceSelector.builder()
//  .matchExpressions(IResolvable)
//  .matchExpressions(java.util.List<MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions>)
//  .matchLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.property.matchExpressions"></a>

```java
public java.lang.Object getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#match_expressions MutatingWebhookConfiguration#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#match_labels MutatingWebhookConfiguration#match_labels}

---

### MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions <a name="MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions;

MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#key MutatingWebhookConfiguration#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#operator MutatingWebhookConfiguration#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#values MutatingWebhookConfiguration#values}

---

### MutatingWebhookConfigurationWebhookObjectSelector <a name="MutatingWebhookConfigurationWebhookObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookObjectSelector;

MutatingWebhookConfigurationWebhookObjectSelector.builder()
//  .matchExpressions(IResolvable)
//  .matchExpressions(java.util.List<MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions>)
//  .matchLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.property.matchExpressions"></a>

```java
public java.lang.Object getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#match_expressions MutatingWebhookConfiguration#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#match_labels MutatingWebhookConfiguration#match_labels}

---

### MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions <a name="MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions;

MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#key MutatingWebhookConfiguration#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#operator MutatingWebhookConfiguration#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#values MutatingWebhookConfiguration#values}

---

### MutatingWebhookConfigurationWebhookRule <a name="MutatingWebhookConfigurationWebhookRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookRule;

MutatingWebhookConfigurationWebhookRule.builder()
    .apiGroups(java.util.List<java.lang.String>)
    .apiVersions(java.util.List<java.lang.String>)
    .operations(java.util.List<java.lang.String>)
    .resources(java.util.List<java.lang.String>)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.apiGroups">apiGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#api_groups MutatingWebhookConfiguration#api_groups}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.apiVersions">apiVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#api_versions MutatingWebhookConfiguration#api_versions}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.operations">operations</a></code> | <code>java.util.List<java.lang.String></code> | Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#resources MutatingWebhookConfiguration#resources}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#scope MutatingWebhookConfiguration#scope}. |

---

##### `apiGroups`<sup>Required</sup> <a name="apiGroups" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.apiGroups"></a>

```java
public java.util.List<java.lang.String> getApiGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#api_groups MutatingWebhookConfiguration#api_groups}.

---

##### `apiVersions`<sup>Required</sup> <a name="apiVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.apiVersions"></a>

```java
public java.util.List<java.lang.String> getApiVersions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#api_versions MutatingWebhookConfiguration#api_versions}.

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.operations"></a>

```java
public java.util.List<java.lang.String> getOperations();
```

- *Type:* java.util.List<java.lang.String>

Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added.

If '*' is present, the length of the slice must be one. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#operations MutatingWebhookConfiguration#operations}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#resources MutatingWebhookConfiguration#resources}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/mutating_webhook_configuration#scope MutatingWebhookConfiguration#scope}.

---

## Classes <a name="Classes" id="Classes"></a>

### MutatingWebhookConfigurationMetadataOutputReference <a name="MutatingWebhookConfigurationMetadataOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationMetadataOutputReference;

new MutatingWebhookConfigurationMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.internalValue"></a>

```java
public MutatingWebhookConfigurationMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

---


### MutatingWebhookConfigurationWebhookClientConfigOutputReference <a name="MutatingWebhookConfigurationWebhookClientConfigOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookClientConfigOutputReference;

new MutatingWebhookConfigurationWebhookClientConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.putService">putService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetCaBundle">resetCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putService` <a name="putService" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.putService"></a>

```java
public void putService(MutatingWebhookConfigurationWebhookClientConfigService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.putService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a>

---

##### `resetCaBundle` <a name="resetCaBundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetCaBundle"></a>

```java
public void resetCaBundle()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference">MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundleInput">caBundleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundle">caBundle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.service"></a>

```java
public MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference getService();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference">MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference</a>

---

##### `caBundleInput`<sup>Optional</sup> <a name="caBundleInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundleInput"></a>

```java
public java.lang.String getCaBundleInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.serviceInput"></a>

```java
public MutatingWebhookConfigurationWebhookClientConfigService getServiceInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `caBundle`<sup>Required</sup> <a name="caBundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundle"></a>

```java
public java.lang.String getCaBundle();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.internalValue"></a>

```java
public MutatingWebhookConfigurationWebhookClientConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a>

---


### MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference <a name="MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference;

new MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.internalValue"></a>

```java
public MutatingWebhookConfigurationWebhookClientConfigService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a>

---


### MutatingWebhookConfigurationWebhookList <a name="MutatingWebhookConfigurationWebhookList" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookList;

new MutatingWebhookConfigurationWebhookList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.get"></a>

```java
public MutatingWebhookConfigurationWebhookOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>>

---


### MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList <a name="MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList;

new MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get"></a>

```java
public MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>>

---


### MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference <a name="MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference;

new MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable

---


### MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference <a name="MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference;

new MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable OR java.util.List<MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchLabels"></a>

```java
public void resetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressions"></a>

```java
public MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```java
public java.lang.Object getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>>

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.internalValue"></a>

```java
public MutatingWebhookConfigurationWebhookNamespaceSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a>

---


### MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList <a name="MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList;

new MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get"></a>

```java
public MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>>

---


### MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference <a name="MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference;

new MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable

---


### MutatingWebhookConfigurationWebhookObjectSelectorOutputReference <a name="MutatingWebhookConfigurationWebhookObjectSelectorOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference;

new MutatingWebhookConfigurationWebhookObjectSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable OR java.util.List<MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchLabels"></a>

```java
public void resetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressions"></a>

```java
public MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressionsInput"></a>

```java
public java.lang.Object getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>>

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.internalValue"></a>

```java
public MutatingWebhookConfigurationWebhookObjectSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a>

---


### MutatingWebhookConfigurationWebhookOutputReference <a name="MutatingWebhookConfigurationWebhookOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookOutputReference;

new MutatingWebhookConfigurationWebhookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putClientConfig">putClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector">putNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putObjectSelector">putObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetAdmissionReviewVersions">resetAdmissionReviewVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetFailurePolicy">resetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetMatchPolicy">resetMatchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetNamespaceSelector">resetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetObjectSelector">resetObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetReinvocationPolicy">resetReinvocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetSideEffects">resetSideEffects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientConfig` <a name="putClientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putClientConfig"></a>

```java
public void putClientConfig(MutatingWebhookConfigurationWebhookClientConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a>

---

##### `putNamespaceSelector` <a name="putNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector"></a>

```java
public void putNamespaceSelector(MutatingWebhookConfigurationWebhookNamespaceSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a>

---

##### `putObjectSelector` <a name="putObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putObjectSelector"></a>

```java
public void putObjectSelector(MutatingWebhookConfigurationWebhookObjectSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putObjectSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<MutatingWebhookConfigurationWebhookRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>>

---

##### `resetAdmissionReviewVersions` <a name="resetAdmissionReviewVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetAdmissionReviewVersions"></a>

```java
public void resetAdmissionReviewVersions()
```

##### `resetFailurePolicy` <a name="resetFailurePolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetFailurePolicy"></a>

```java
public void resetFailurePolicy()
```

##### `resetMatchPolicy` <a name="resetMatchPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetMatchPolicy"></a>

```java
public void resetMatchPolicy()
```

##### `resetNamespaceSelector` <a name="resetNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetNamespaceSelector"></a>

```java
public void resetNamespaceSelector()
```

##### `resetObjectSelector` <a name="resetObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetObjectSelector"></a>

```java
public void resetObjectSelector()
```

##### `resetReinvocationPolicy` <a name="resetReinvocationPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetReinvocationPolicy"></a>

```java
public void resetReinvocationPolicy()
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetRule"></a>

```java
public void resetRule()
```

##### `resetSideEffects` <a name="resetSideEffects" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetSideEffects"></a>

```java
public void resetSideEffects()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference">MutatingWebhookConfigurationWebhookClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference">MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.objectSelector">objectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference">MutatingWebhookConfigurationWebhookObjectSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList">MutatingWebhookConfigurationWebhookRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersionsInput">admissionReviewVersionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.clientConfigInput">clientConfigInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.failurePolicyInput">failurePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.matchPolicyInput">matchPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.namespaceSelectorInput">namespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.objectSelectorInput">objectSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.reinvocationPolicyInput">reinvocationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.sideEffectsInput">sideEffectsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersions">admissionReviewVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.failurePolicy">failurePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.matchPolicy">matchPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.reinvocationPolicy">reinvocationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.sideEffects">sideEffects</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientConfig`<sup>Required</sup> <a name="clientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.clientConfig"></a>

```java
public MutatingWebhookConfigurationWebhookClientConfigOutputReference getClientConfig();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference">MutatingWebhookConfigurationWebhookClientConfigOutputReference</a>

---

##### `namespaceSelector`<sup>Required</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.namespaceSelector"></a>

```java
public MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference getNamespaceSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference">MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference</a>

---

##### `objectSelector`<sup>Required</sup> <a name="objectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.objectSelector"></a>

```java
public MutatingWebhookConfigurationWebhookObjectSelectorOutputReference getObjectSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference">MutatingWebhookConfigurationWebhookObjectSelectorOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.rule"></a>

```java
public MutatingWebhookConfigurationWebhookRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList">MutatingWebhookConfigurationWebhookRuleList</a>

---

##### `admissionReviewVersionsInput`<sup>Optional</sup> <a name="admissionReviewVersionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersionsInput"></a>

```java
public java.util.List<java.lang.String> getAdmissionReviewVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientConfigInput`<sup>Optional</sup> <a name="clientConfigInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.clientConfigInput"></a>

```java
public MutatingWebhookConfigurationWebhookClientConfig getClientConfigInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a>

---

##### `failurePolicyInput`<sup>Optional</sup> <a name="failurePolicyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.failurePolicyInput"></a>

```java
public java.lang.String getFailurePolicyInput();
```

- *Type:* java.lang.String

---

##### `matchPolicyInput`<sup>Optional</sup> <a name="matchPolicyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.matchPolicyInput"></a>

```java
public java.lang.String getMatchPolicyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceSelectorInput`<sup>Optional</sup> <a name="namespaceSelectorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.namespaceSelectorInput"></a>

```java
public MutatingWebhookConfigurationWebhookNamespaceSelector getNamespaceSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a>

---

##### `objectSelectorInput`<sup>Optional</sup> <a name="objectSelectorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.objectSelectorInput"></a>

```java
public MutatingWebhookConfigurationWebhookObjectSelector getObjectSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a>

---

##### `reinvocationPolicyInput`<sup>Optional</sup> <a name="reinvocationPolicyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.reinvocationPolicyInput"></a>

```java
public java.lang.String getReinvocationPolicyInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>>

---

##### `sideEffectsInput`<sup>Optional</sup> <a name="sideEffectsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.sideEffectsInput"></a>

```java
public java.lang.String getSideEffectsInput();
```

- *Type:* java.lang.String

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `admissionReviewVersions`<sup>Required</sup> <a name="admissionReviewVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersions"></a>

```java
public java.util.List<java.lang.String> getAdmissionReviewVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failurePolicy`<sup>Required</sup> <a name="failurePolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.failurePolicy"></a>

```java
public java.lang.String getFailurePolicy();
```

- *Type:* java.lang.String

---

##### `matchPolicy`<sup>Required</sup> <a name="matchPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.matchPolicy"></a>

```java
public java.lang.String getMatchPolicy();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reinvocationPolicy`<sup>Required</sup> <a name="reinvocationPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.reinvocationPolicy"></a>

```java
public java.lang.String getReinvocationPolicy();
```

- *Type:* java.lang.String

---

##### `sideEffects`<sup>Required</sup> <a name="sideEffects" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.sideEffects"></a>

```java
public java.lang.String getSideEffects();
```

- *Type:* java.lang.String

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a> OR com.hashicorp.cdktf.IResolvable

---


### MutatingWebhookConfigurationWebhookRuleList <a name="MutatingWebhookConfigurationWebhookRuleList" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookRuleList;

new MutatingWebhookConfigurationWebhookRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.get"></a>

```java
public MutatingWebhookConfigurationWebhookRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>>

---


### MutatingWebhookConfigurationWebhookRuleOutputReference <a name="MutatingWebhookConfigurationWebhookRuleOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.mutating_webhook_configuration.MutatingWebhookConfigurationWebhookRuleOutputReference;

new MutatingWebhookConfigurationWebhookRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroupsInput">apiGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersionsInput">apiVersionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.operationsInput">operationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroups">apiGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersions">apiVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.operations">operations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiGroupsInput`<sup>Optional</sup> <a name="apiGroupsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroupsInput"></a>

```java
public java.util.List<java.lang.String> getApiGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiVersionsInput`<sup>Optional</sup> <a name="apiVersionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersionsInput"></a>

```java
public java.util.List<java.lang.String> getApiVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.operationsInput"></a>

```java
public java.util.List<java.lang.String> getOperationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `apiGroups`<sup>Required</sup> <a name="apiGroups" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroups"></a>

```java
public java.util.List<java.lang.String> getApiGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiVersions`<sup>Required</sup> <a name="apiVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersions"></a>

```java
public java.util.List<java.lang.String> getApiVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.operations"></a>

```java
public java.util.List<java.lang.String> getOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a> OR com.hashicorp.cdktf.IResolvable

---



