# `endpointSliceV1` Submodule <a name="`endpointSliceV1` Submodule" id="@cdktf/provider-kubernetes.endpointSliceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EndpointSliceV1 <a name="EndpointSliceV1" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1 kubernetes_endpoint_slice_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1;

EndpointSliceV1.Builder.create(Construct scope, java.lang.String id)
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
    .addressType(java.lang.String)
    .endpoint(IResolvable)
    .endpoint(java.util.List<EndpointSliceV1Endpoint>)
    .metadata(EndpointSliceV1Metadata)
    .port(IResolvable)
    .port(java.util.List<EndpointSliceV1Port>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.addressType">addressType</a></code> | <code>java.lang.String</code> | address_type specifies the type of address carried by this EndpointSlice. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.endpoint">endpoint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>></code> | endpoint block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.port">port</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>></code> | port block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#id EndpointSliceV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.addressType"></a>

- *Type:* java.lang.String

address_type specifies the type of address carried by this EndpointSlice.

All addresses in this slice must be the same type. This field is immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#address_type EndpointSliceV1#address_type}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.endpoint"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#endpoint EndpointSliceV1#endpoint}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#metadata EndpointSliceV1#metadata}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.port"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>>

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#port EndpointSliceV1#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#id EndpointSliceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putEndpoint">putEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putPort">putPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoint` <a name="putEndpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putEndpoint"></a>

```java
public void putEndpoint(IResolvable OR java.util.List<EndpointSliceV1Endpoint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putEndpoint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>>

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata"></a>

```java
public void putMetadata(EndpointSliceV1Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

---

##### `putPort` <a name="putPort" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putPort"></a>

```java
public void putPort(IResolvable OR java.util.List<EndpointSliceV1Port> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putPort.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EndpointSliceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1;

EndpointSliceV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1;

EndpointSliceV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1;

EndpointSliceV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1;

EndpointSliceV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EndpointSliceV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EndpointSliceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EndpointSliceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EndpointSliceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EndpointSliceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList">EndpointSliceV1EndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference">EndpointSliceV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.port">port</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList">EndpointSliceV1PortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.addressTypeInput">addressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.endpointInput">endpointInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.portInput">portInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.addressType">addressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.endpoint"></a>

```java
public EndpointSliceV1EndpointList getEndpoint();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList">EndpointSliceV1EndpointList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.metadata"></a>

```java
public EndpointSliceV1MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference">EndpointSliceV1MetadataOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.port"></a>

```java
public EndpointSliceV1PortList getPort();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList">EndpointSliceV1PortList</a>

---

##### `addressTypeInput`<sup>Optional</sup> <a name="addressTypeInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.addressTypeInput"></a>

```java
public java.lang.String getAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.endpointInput"></a>

```java
public java.lang.Object getEndpointInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.metadataInput"></a>

```java
public EndpointSliceV1Metadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.portInput"></a>

```java
public java.lang.Object getPortInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>>

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.addressType"></a>

```java
public java.lang.String getAddressType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EndpointSliceV1Config <a name="EndpointSliceV1Config" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1Config;

EndpointSliceV1Config.builder()
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
    .addressType(java.lang.String)
    .endpoint(IResolvable)
    .endpoint(java.util.List<EndpointSliceV1Endpoint>)
    .metadata(EndpointSliceV1Metadata)
    .port(IResolvable)
    .port(java.util.List<EndpointSliceV1Port>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.addressType">addressType</a></code> | <code>java.lang.String</code> | address_type specifies the type of address carried by this EndpointSlice. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.endpoint">endpoint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>></code> | endpoint block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.port">port</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>></code> | port block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#id EndpointSliceV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.addressType"></a>

```java
public java.lang.String getAddressType();
```

- *Type:* java.lang.String

address_type specifies the type of address carried by this EndpointSlice.

All addresses in this slice must be the same type. This field is immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#address_type EndpointSliceV1#address_type}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.endpoint"></a>

```java
public java.lang.Object getEndpoint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#endpoint EndpointSliceV1#endpoint}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.metadata"></a>

```java
public EndpointSliceV1Metadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#metadata EndpointSliceV1#metadata}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.port"></a>

```java
public java.lang.Object getPort();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>>

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#port EndpointSliceV1#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#id EndpointSliceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EndpointSliceV1Endpoint <a name="EndpointSliceV1Endpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1Endpoint;

EndpointSliceV1Endpoint.builder()
    .addresses(java.util.List<java.lang.String>)
//  .condition(EndpointSliceV1EndpointCondition)
//  .hostname(java.lang.String)
//  .nodeName(java.lang.String)
//  .targetRef(EndpointSliceV1EndpointTargetRef)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.hostname">hostname</a></code> | <code>java.lang.String</code> | hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | nodeName represents the name of the Node hosting this endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.targetRef">targetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a></code> | target_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.zone">zone</a></code> | <code>java.lang.String</code> | zone is the name of the Zone this endpoint exists in. |

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#addresses EndpointSliceV1#addresses}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.condition"></a>

```java
public EndpointSliceV1EndpointCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#condition EndpointSliceV1#condition}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#hostname EndpointSliceV1#hostname}

---

##### `nodeName`<sup>Optional</sup> <a name="nodeName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

nodeName represents the name of the Node hosting this endpoint.

This can be used to determine endpoints local to a Node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#node_name EndpointSliceV1#node_name}

---

##### `targetRef`<sup>Optional</sup> <a name="targetRef" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.targetRef"></a>

```java
public EndpointSliceV1EndpointTargetRef getTargetRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a>

target_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#target_ref EndpointSliceV1#target_ref}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

zone is the name of the Zone this endpoint exists in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#zone EndpointSliceV1#zone}

---

### EndpointSliceV1EndpointCondition <a name="EndpointSliceV1EndpointCondition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1EndpointCondition;

EndpointSliceV1EndpointCondition.builder()
//  .ready(java.lang.Boolean)
//  .ready(IResolvable)
//  .serving(java.lang.Boolean)
//  .serving(IResolvable)
//  .terminating(java.lang.Boolean)
//  .terminating(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.ready">ready</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.serving">serving</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | serving is identical to ready except that it is set regardless of the terminating state of endpoints. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.terminating">terminating</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | terminating indicates that this endpoint is terminating. |

---

##### `ready`<sup>Optional</sup> <a name="ready" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.ready"></a>

```java
public java.lang.Object getReady();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#ready EndpointSliceV1#ready}

---

##### `serving`<sup>Optional</sup> <a name="serving" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.serving"></a>

```java
public java.lang.Object getServing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

serving is identical to ready except that it is set regardless of the terminating state of endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#serving EndpointSliceV1#serving}

---

##### `terminating`<sup>Optional</sup> <a name="terminating" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.terminating"></a>

```java
public java.lang.Object getTerminating();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

terminating indicates that this endpoint is terminating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#terminating EndpointSliceV1#terminating}

---

### EndpointSliceV1EndpointTargetRef <a name="EndpointSliceV1EndpointTargetRef" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1EndpointTargetRef;

EndpointSliceV1EndpointTargetRef.builder()
    .name(java.lang.String)
//  .fieldPath(java.lang.String)
//  .namespace(java.lang.String)
//  .resourceVersion(java.lang.String)
//  .uid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | Specific resourceVersion to which this reference is made, if any. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.uid">uid</a></code> | <code>java.lang.String</code> | If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#name EndpointSliceV1#name}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#field_path EndpointSliceV1#field_path}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#namespace EndpointSliceV1#namespace}

---

##### `resourceVersion`<sup>Optional</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

Specific resourceVersion to which this reference is made, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#resource_version EndpointSliceV1#resource_version}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#uid EndpointSliceV1#uid}

---

### EndpointSliceV1Metadata <a name="EndpointSliceV1Metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1Metadata;

EndpointSliceV1Metadata.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the endpoint_slice must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#annotations EndpointSliceV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#generate_name EndpointSliceV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#labels EndpointSliceV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#name EndpointSliceV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the endpoint_slice must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#namespace EndpointSliceV1#namespace}

---

### EndpointSliceV1Port <a name="EndpointSliceV1Port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1Port;

EndpointSliceV1Port.builder()
    .appProtocol(java.lang.String)
    .port(java.lang.String)
//  .name(java.lang.String)
//  .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.appProtocol">appProtocol</a></code> | <code>java.lang.String</code> | The application protocol for this port. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.port">port</a></code> | <code>java.lang.String</code> | port represents the port number of the endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.name">name</a></code> | <code>java.lang.String</code> | name represents the name of this port. All ports in an EndpointSlice must have a unique name. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.protocol">protocol</a></code> | <code>java.lang.String</code> | protocol represents the IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP. |

---

##### `appProtocol`<sup>Required</sup> <a name="appProtocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.appProtocol"></a>

```java
public java.lang.String getAppProtocol();
```

- *Type:* java.lang.String

The application protocol for this port.

This is used as a hint for implementations to offer richer behavior for protocols that they understand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#app_protocol EndpointSliceV1#app_protocol}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

port represents the port number of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#port EndpointSliceV1#port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name represents the name of this port. All ports in an EndpointSlice must have a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#name EndpointSliceV1#name}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

protocol represents the IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#protocol EndpointSliceV1#protocol}

---

## Classes <a name="Classes" id="Classes"></a>

### EndpointSliceV1EndpointConditionOutputReference <a name="EndpointSliceV1EndpointConditionOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1EndpointConditionOutputReference;

new EndpointSliceV1EndpointConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetReady">resetReady</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetServing">resetServing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetTerminating">resetTerminating</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReady` <a name="resetReady" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetReady"></a>

```java
public void resetReady()
```

##### `resetServing` <a name="resetServing" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetServing"></a>

```java
public void resetServing()
```

##### `resetTerminating` <a name="resetTerminating" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetTerminating"></a>

```java
public void resetTerminating()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.readyInput">readyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.servingInput">servingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.terminatingInput">terminatingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.ready">ready</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.serving">serving</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.terminating">terminating</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readyInput`<sup>Optional</sup> <a name="readyInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.readyInput"></a>

```java
public java.lang.Object getReadyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `servingInput`<sup>Optional</sup> <a name="servingInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.servingInput"></a>

```java
public java.lang.Object getServingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminatingInput`<sup>Optional</sup> <a name="terminatingInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.terminatingInput"></a>

```java
public java.lang.Object getTerminatingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.ready"></a>

```java
public java.lang.Object getReady();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serving`<sup>Required</sup> <a name="serving" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.serving"></a>

```java
public java.lang.Object getServing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminating`<sup>Required</sup> <a name="terminating" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.terminating"></a>

```java
public java.lang.Object getTerminating();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.internalValue"></a>

```java
public EndpointSliceV1EndpointCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a>

---


### EndpointSliceV1EndpointList <a name="EndpointSliceV1EndpointList" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1EndpointList;

new EndpointSliceV1EndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.get"></a>

```java
public EndpointSliceV1EndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>>

---


### EndpointSliceV1EndpointOutputReference <a name="EndpointSliceV1EndpointOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1EndpointOutputReference;

new EndpointSliceV1EndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef">putTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetNodeName">resetNodeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetTargetRef">resetTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putCondition"></a>

```java
public void putCondition(EndpointSliceV1EndpointCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a>

---

##### `putTargetRef` <a name="putTargetRef" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef"></a>

```java
public void putTargetRef(EndpointSliceV1EndpointTargetRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetNodeName` <a name="resetNodeName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetNodeName"></a>

```java
public void resetNodeName()
```

##### `resetTargetRef` <a name="resetTargetRef" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetTargetRef"></a>

```java
public void resetTargetRef()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetZone"></a>

```java
public void resetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference">EndpointSliceV1EndpointConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.targetRef">targetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference">EndpointSliceV1EndpointTargetRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.addressesInput">addressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.nodeNameInput">nodeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.targetRefInput">targetRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.condition"></a>

```java
public EndpointSliceV1EndpointConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference">EndpointSliceV1EndpointConditionOutputReference</a>

---

##### `targetRef`<sup>Required</sup> <a name="targetRef" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.targetRef"></a>

```java
public EndpointSliceV1EndpointTargetRefOutputReference getTargetRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference">EndpointSliceV1EndpointTargetRefOutputReference</a>

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.addressesInput"></a>

```java
public java.util.List<java.lang.String> getAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.conditionInput"></a>

```java
public EndpointSliceV1EndpointCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `nodeNameInput`<sup>Optional</sup> <a name="nodeNameInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.nodeNameInput"></a>

```java
public java.lang.String getNodeNameInput();
```

- *Type:* java.lang.String

---

##### `targetRefInput`<sup>Optional</sup> <a name="targetRefInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.targetRefInput"></a>

```java
public EndpointSliceV1EndpointTargetRef getTargetRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint">EndpointSliceV1Endpoint</a>

---


### EndpointSliceV1EndpointTargetRefOutputReference <a name="EndpointSliceV1EndpointTargetRefOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1EndpointTargetRefOutputReference;

new EndpointSliceV1EndpointTargetRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetResourceVersion">resetResourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetUid">resetUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetFieldPath"></a>

```java
public void resetFieldPath()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetResourceVersion` <a name="resetResourceVersion" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetResourceVersion"></a>

```java
public void resetResourceVersion()
```

##### `resetUid` <a name="resetUid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetUid"></a>

```java
public void resetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersionInput">resourceVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.uidInput">uidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fieldPathInput"></a>

```java
public java.lang.String getFieldPathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `resourceVersionInput`<sup>Optional</sup> <a name="resourceVersionInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersionInput"></a>

```java
public java.lang.String getResourceVersionInput();
```

- *Type:* java.lang.String

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.uidInput"></a>

```java
public java.lang.String getUidInput();
```

- *Type:* java.lang.String

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.internalValue"></a>

```java
public EndpointSliceV1EndpointTargetRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a>

---


### EndpointSliceV1MetadataOutputReference <a name="EndpointSliceV1MetadataOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1MetadataOutputReference;

new EndpointSliceV1MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.internalValue"></a>

```java
public EndpointSliceV1Metadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

---


### EndpointSliceV1PortList <a name="EndpointSliceV1PortList" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1PortList;

new EndpointSliceV1PortList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.get"></a>

```java
public EndpointSliceV1PortOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>>

---


### EndpointSliceV1PortOutputReference <a name="EndpointSliceV1PortOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.endpoint_slice_v1.EndpointSliceV1PortOutputReference;

new EndpointSliceV1PortOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.appProtocolInput">appProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.appProtocol">appProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appProtocolInput`<sup>Optional</sup> <a name="appProtocolInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.appProtocolInput"></a>

```java
public java.lang.String getAppProtocolInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `appProtocol`<sup>Required</sup> <a name="appProtocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.appProtocol"></a>

```java
public java.lang.String getAppProtocol();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port">EndpointSliceV1Port</a>

---



